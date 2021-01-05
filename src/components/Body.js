import React, { Component } from "react";
import RowContainer from "./RowContainer";
import Column from "./Column";
import Container from "react-bootstrap/Container";

const API = "http://localhost:3000/neighborhoods";
// const alphabetizeStart = "m";

class Body extends Component {
  state = {
    neighborhoods: [],
    selectedNeighborhoodIDs: [],
    priceLow: 2000,
    priceHigh: 2099,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          neighborhoods: data,
          selectedNeighborhoodIDs: this.allIDsFromJsonObject(data)
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  allIDsFromJsonObject = (jsonObj) => {
    return jsonObj.map( neighborhood => neighborhood.id )
  }

  allNeighborhoodIDsAndNames = () => {
    return this.state.neighborhoods.map((neighborhood) => {
      return { id: neighborhood.id, name: neighborhood.name };
    });
  };

  selectNeighborhoods = () => {
    let selectedNeighborhoods = this.state.selectedNeighborhoodIDs.map((id) =>
      this.state.neighborhoods.find((neighborhood) => neighborhood.id === id)
    );
    return selectedNeighborhoods;
  };

  filterNeighborhoodsByPriceLow = () => {
    let newArr = this.selectNeighborhoods().map((neighborhood) => ({
      id: neighborhood.id,
      name: neighborhood.name,
      apartments: neighborhood.apartments.filter(
        (apt) =>
          apt.price >= parseInt(this.state.priceLow) - 100 && apt.price <= parseInt(this.state.priceHigh) -100
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
          apt.price >= parseInt(this.state.priceLow) + 99 && apt.price <= parseInt(this.state.priceHigh) + 99
      ),
    }));
    return newArr;
  };
  
  filterNeighborhoodsByPrice = () => {
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

  updateSelectedNeighborhoods = (neighborhoodArray) => {
    this.setState({ selectedNeighborhoodIDs: neighborhoodArray });
  };

  updatePrice = (low, high) => {
    console.log("updatePrice called")
    this.setState({
      priceLow: parseInt(low),
      priceHigh: parseInt(high),
    });
  };

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
          neighborhoodsCenter={this.filterNeighborhoodsByPrice()}
          neighborhoodsLow={this.filterNeighborhoodsByPriceLow()}
          neighborhoodsHigh={this.filterNeighborhoodsByPriceHigh()}
          priceLow={this.state.priceLow}
          priceHigh={this.state.priceHigh}
        />
      </Container>
    );
  }
}

export default Body;
