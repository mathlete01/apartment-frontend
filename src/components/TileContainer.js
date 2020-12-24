import React, { Component } from "react";
import Tile from "./Tile";
// import Container from "react-bootstrap/Container";
import { Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from "reactstrap";

class TileContainer extends Component {
  buildTiles = () => {
    return this.props.apartments.map((apartment) => (
      <ListGroupItem tag="a" href="#">
        <Tile apartment={apartment} className="tiles" />
      </ListGroupItem>
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
