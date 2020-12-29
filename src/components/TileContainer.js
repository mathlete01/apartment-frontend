import React, { Component } from "react";
import Tile from "./Tile";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup'

class TileContainer extends Component {
  buildTiles = () => {
    return this.props.apartments.map((apartment) => (
      <ListGroup.Item tag="a" href="#">
        <Tile apartment={apartment} className="tiles" />
      </ListGroup.Item>
    ));
  };

  render() {
    return (
      <Container>
        <ListGroup horizontal="lg">{this.buildTiles()}</ListGroup>
      </Container>
    );
  }
}

export default TileContainer;
