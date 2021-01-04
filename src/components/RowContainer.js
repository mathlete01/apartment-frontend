import React, { Component } from "react";
import { default as TileRow } from "./Row_";
import Container from "react-bootstrap/Container";
// import { Container } from 'reactstrap';

class RowContainer extends Component {
  // rowL = this.props.neighborhoodsL.map((element) => (
  //   <TileRow
  //     name={element.name}
  //     count={element.apartments.length}
  //     apartments={this.sortApartments(element.apartments)}
  //     key={element.id}
  //   />
  // ));

  // rowC = () => {
  //   return this.props.neighborhoods.map((element) => (
  //     <TileRow
  //       name={element.name}
  //       count={element.apartments.length}
  //       apartments={this.sortApartments(element.apartments)}
  //       apartments={element.apartments}
  //       key={element.id}
  //     />
  //   ));
  // };

  // rowR = () => {
  //   return this.props.neighborhoodsR.map((element) => (
  //     <TileRow
  //       name={element.name}
  //       count={element.apartments.length}
  //       // apartments={this.sortApartments(element.apartments)}
  //       apartments={element.apartments}
  //       key={element.id}
  //     />
  //   ));
  // };

  buildRowTop = (arrLow, arrCenter, arrHigh) => {
  
    let row1col1 = arrLow[0]
    let row1col2 = arrCenter[0]
    let row1col3 = arrHigh[0]
    console.log(row1col1)
    console.log(row1col2)
    console.log(row1col3)
    // console.log(row1col3.apartments)
    return (
      <TileRow 
      name={"rowTop"} 
      topLeft = {row1col1}
      topCenter = {row1col2}
      topRight = {row1col3} />
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
        {/* {this.buildRows()} */}
        {/* {this.rowC()} */}
        {/* {this.rowR()} */}
        {this.buildRowTop(this.props.neighborhoodsLow, this.props.neighborhoods, this.props.neighborhoodsHigh)}
        {/* <TileRow
        neighborhoods = {this.props.neighborhood}
        neighborhoodsHigh = {this.props.neighborhoodsHigh}
        apartments = {this.props.neighborhood.apartments}
        apartmentsR = {this.props.neighborhoodR.apartments} /> */}
      </Container>
    );
  }
}

export default RowContainer;
