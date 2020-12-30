import React, { Component } from "react";
import Tile from "./Tile";
// import Container from "react-bootstrap/Container";
// import ListGroup from 'react-bootstrap/ListGroup'
import Col from "react-bootstrap/Col";

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
      <Col className='tile-container d-flex justify-content-start border-bottom'>
        { this.buildTiles() }
      </Col>
    );
  }
}

export default TileContainer;
