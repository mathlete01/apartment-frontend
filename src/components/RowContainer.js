import React, { Component } from "react";
import {default as TileRow} from "./Row_";
import Container from "react-bootstrap/Container";
// import { Container } from 'reactstrap';

class RowContainer extends Component {
  buildRow_s = () => {
    return this.props.neighborhoods.slice(0,2).map((element) => (
      <TileRow 
      name={element.name} 
      count= {element.apartments.length} 
      apartments={element.apartments} 
      filteredApartments = {this.props.filteredApartments}
      key = {element.id}/>
    ));
  };

  render() {
    //console.log(this.props.neighborhoods);
    return (
      <Container fluid >
        {this.buildRow_s()}
      </Container>
    );
  }
}

export default RowContainer;