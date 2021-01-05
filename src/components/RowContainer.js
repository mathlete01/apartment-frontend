import React, { Component } from "react";
import { default as TileRow } from "./Row_";
import Container from "react-bootstrap/Container";
// import { Container } from 'reactstrap';

class RowContainer extends Component {

  buildRowTop = (arrLow, arrCenter, arrHigh) => {
    let neighborhoodName = ""
    this.props.neighborhoodsLow[0] ? neighborhoodName = this.props.neighborhoodsLow[0].name : neighborhoodName = null
    let row1col1 = arrLow[0]
    let row1col2 = arrCenter[0]
    let row1col3 = arrHigh[0]
    return (
      <TileRow 
      name={neighborhoodName} 
      left = {row1col1}
      center = {row1col2}
      right = {row1col3} />
    )
  }

  buildRowMiddle = (arrLow, arrCenter, arrHigh) => {
    let neighborhoodName = ""
    this.props.neighborhoodsLow[1] ? neighborhoodName = this.props.neighborhoodsLow[1].name : neighborhoodName = null
    let row2col1 = arrLow[1]
    let row2col2 = arrCenter[1]
    let row2col3 = arrHigh[1]
    return (
      <TileRow 
      name={neighborhoodName} 
      left = {row2col1}
      center = {row2col2}
      right = {row2col3} />
    )
  }

  buildRowBottom = (arrLow, arrCenter, arrHigh) => {
    let neighborhoodName = ""
    this.props.neighborhoodsLow[2] ? neighborhoodName = this.props.neighborhoodsLow[2].name : neighborhoodName = null
    let row3col1 = arrLow[2]
    let row3col2 = arrCenter[2]
    let row3col3 = arrHigh[2]
    return (
      <TileRow 
      name={neighborhoodName} 
      left = {row3col1}
      center = {row3col2}
      right = {row3col3} 
      updatePrice = {this.props.updatePrice}
      />
    )
  }

  // sortApartments = (apartmentArray) => {
  //   return apartmentArray.sort((a, b) => a.price - b.price);
  // };

  render() {
    return (
      <Container
        id="row-container"
        className="mt-auto d-flex flex-column justify-content-between"
        fluid
      >
        {this.buildRowTop(this.props.neighborhoodsLow, this.props.neighborhoodsCenter, this.props.neighborhoodsHigh)}
        {this.buildRowMiddle(this.props.neighborhoodsLow, this.props.neighborhoodsCenter, this.props.neighborhoodsHigh)}
        {this.buildRowBottom(this.props.neighborhoodsLow, this.props.neighborhoodsCenter, this.props.neighborhoodsHigh)}
      </Container>
    );
  }
}

export default RowContainer;
