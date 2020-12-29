import React, { Component } from "react";
import RowContainer from "./RowContainer";
import Column from "./Column"
import Container from "react-bootstrap/Container";
// import { Container } from "reactstrap";

const API = "http://localhost:3000/neighborhoods";
// const priceLow = 2000;
// const priceHigh = 3000;
// const alphabetizeStart = "m";

class Body extends Component {
  state = {
    neighborhoods: [],
    priceLow: 2000,
    priceHigh: 3000,
    filteredApartments: []
  };

  componentDidMount() {
    console.log(`* componentDidMount`);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          neighborhoods: data,
        });
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <Container id='body-container' fluid>
        <Column />
        <RowContainer 
        neighborhoods={this.state.neighborhoods} 
        priceLow={this.state.priceLow} 
        priceHigh={this.state.priceHigh}
        // filteredApartments = {this.state.filteredApartments}
        />
      </Container>
    );
  }
}

export default Body;
