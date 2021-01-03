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

  rowC = () => {
    return this.props.neighborhoods.map((element) => (
      <TileRow
        name={element.name}
        count={element.apartments.length}
        apartments={this.sortApartments(element.apartments)}
        apartments={element.apartments}
        key={element.id}
      />
    ));
  };

  buildRows = () => {
    return this.rowC;
  };
  // buildRowsR = () => {
  //   return this.props.neighborhoodsR.map((element) => (
  //     <TileRow
  //     name={element.name}
  //     count= {element.apartments.length}
  //     apartments={this.sortApartments(element.apartments)}
  //     key = {element.id}/>
  //   ));
  // };

  sortApartments = (apartmentArray) => {
    return apartmentArray.sort((a, b) => a.price - b.price);
  };

  render() {
    return (
      <Container
        id="row-container"
        className="mt-auto d-flex flex-column justify-content-between"
        fluid
      >
        {/* {this.buildRows()} */}
        {this.rowC()}
        {/* {this.buildRowsR()} */}
      </Container>
    );
  }
}

export default RowContainer;
