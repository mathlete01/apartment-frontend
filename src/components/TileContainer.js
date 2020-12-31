import React, { Component } from "react";
import Tile from "./Tile";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup'

class TileContainer extends Component {
  buildTiles = () => {
    return this.props.apartments.slice(0,3).map((apartment) => (
        <Tile 
        apartment={apartment} className="tiles"
        key = {apartment.id} 
        />
    ));
  };

  render() {
    return (
      <Container className='tile-container' >
        { this.buildTiles() }
      </Container>
    );
  }
}

export default TileContainer;