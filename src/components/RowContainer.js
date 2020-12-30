import React, { Component } from "react";
import {default as TileRow} from "./Row_";
import Container from "react-bootstrap/Container";
// import { Container } from 'reactstrap';

class RowContainer extends Component {
  buildRows = () => {
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
    return (
      <Container id='row-container' className='mt-auto d-flex flex-column justify-content-between' fluid>
        {this.buildRows()}
      </Container>
    );
  }
}

export default RowContainer;