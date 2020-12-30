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
    priceHigh: 3000,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          neighborhoods: data,
          selectedNeighborhoodIDs: [data[0].id, data[1].id, data[2].id],
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  selectNeighborhoods = () => {
    let selectedNeighborhoods = this.state.selectedNeighborhoodIDs.map((id) =>
      this.state.neighborhoods.find((neighborhood) => neighborhood.id === id)
    );
    return selectedNeighborhoods;
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
    console.log(newArr);
    // return newArr
  };

  render() {
    return (
      <Container id="body-container" fluid>
        <Column />
        {this.filterNeighborhoodsByPrice()}
        <RowContainer
          neighborhoods={this.state.neighborhoods}
          priceLow={this.state.priceLow}
          priceHigh={this.state.priceHigh}
        />
      </Container>
    );
  }
}

export default Body;
