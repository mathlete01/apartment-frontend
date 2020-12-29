import React, { Component } from "react";
import RowContainer from "./RowContainer";
import Column from "./Column";
import Container from "react-bootstrap/Container";

const API = "http://localhost:3000/neighborhoods";
// const alphabetizeStart = "m";

class Body extends Component {
  state = {
    neighborhoods: [],
    selectedNeighborhoods: [],
    priceLow: 2000,
    priceHigh: 3000,
    // filteredApartments: []
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          neighborhoods: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  filterApartments = () => {
    console.log("filterApartments called");
    // console.log(this.state.neighborhoods);
    return this.state.neighborhoods.filter(element => 
      element.apartments.some(apt => apt.price >= this.state.priceLow) &&
        element.apartments.some(apt => apt.price <= this.state.priceHigh)
    )
  }


  render() {
    return (
      <Container fluid>
        <Column />
        <RowContainer neighborhoods={this.filterApartments()} />
        {/* <RowContainer neighborhoods={this.state.neighborhoods} /> */}
      </Container>
    );
  }
}

export default Body;
