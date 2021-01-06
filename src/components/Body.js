import React, { Component } from "react";
import RowContainer from "./RowContainer";
import Column from "./Column";
import Container from "react-bootstrap/Container";

const API = "http://localhost:3000/neighborhoods";

class Body extends Component {
  state = {
    neighborhoods: [],
    selectedNeighborhoodIDs: [],
    priceLow: 2000,
    priceHigh: 2099,
    likedApartments: [],
    dislikedApartments: []
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          neighborhoods: this.sortNeighborhoods(data),
          selectedNeighborhoodIDs: this.allIDsFromJsonObject(data),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  sortNeighborhoods = (jsonObj) => {
    return jsonObj.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    )
  };

  allIDsFromJsonObject = (jsonObj) => {
    return jsonObj.map((neighborhood) => neighborhood.id);
  };

  allNeighborhoodIDsAndNames = () => {
    return this.state.neighborhoods.map((neighborhood) => {
      return { id: neighborhood.id, name: neighborhood.name };
    });
  };

  filterNeighborhoodsByPriceLow = () => {
    let newArr = this.selectNeighborhoods().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter(
        (apt) =>
          apt.price >= parseInt(this.state.priceLow) - 100 &&
          apt.price <= parseInt(this.state.priceHigh) - 100
      ),
    }));
    return newArr;
  };

  filterNeighborhoodsByPriceHigh = () => {
    let newArr = this.selectNeighborhoods().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter(
        (apt) =>
          apt.price >= parseInt(this.state.priceLow) + 99 &&
          apt.price <= parseInt(this.state.priceHigh) + 99
      ),
    }));
    return newArr;
  };

  filterNeighborhoodsByPriceCenter = () => {
    let newArr = this.selectNeighborhoods().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter(
        (apt) =>
          apt.price >= this.state.priceLow && apt.price <= this.state.priceHigh
      ),
    }));
    return newArr;
  };

  selectNeighborhoods = () => {
    let selectedNeighborhoods = this.state.selectedNeighborhoodIDs.map((id) =>
      this.state.neighborhoods.find((neighborhood) => neighborhood.id === id)
    );
    return selectedNeighborhoods;
  };

  updateSelectedNeighborhoods = (neighborhoodArray) => {
    this.setState({ selectedNeighborhoodIDs: neighborhoodArray });
  };

  updatePrice = (low, high) => {
    this.setState({
      priceLow: parseInt(low),
      priceHigh: parseInt(high),
    });
  };

  handleLike = (str, id) => {
    if (str === "like"){
      this.setState(prevState => {
        return{
          likedApartments: [...prevState.likedApartments, id ]
        }
      })
    }
    else if (str === "unlike"){
      this.setState(prevState => {
        return{
          likedApartments: [...prevState.likedApartments.filter(aptId => aptId !== id)]
        }
      })
    }
  }

  render() {
    return (
      <Container id="body-container" className="d-flex flex-column" fluid>
        <Column
          neighborhoods={this.allNeighborhoodIDsAndNames()}
          handleNeighborhoodChange={this.updateSelectedNeighborhoods}
          selectedIDs={this.state.selectedNeighborhoodIDs}
          priceLow={this.state.priceLow}
          priceHigh={this.state.priceHigh}
          updatePrice={this.updatePrice}
        />
        <RowContainer
          neighborhoodsCenter={this.filterNeighborhoodsByPriceCenter()}
          neighborhoodsLow={this.filterNeighborhoodsByPriceLow()}
          neighborhoodsHigh={this.filterNeighborhoodsByPriceHigh()}
          priceLow={this.state.priceLow}
          priceHigh={this.state.priceHigh}
          handleLike={this.handleLike}
          likedApts={this.state.likedApartments}
        />
      </Container>
    );
  }
}

export default Body;
