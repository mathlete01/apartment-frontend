import React, { Component } from "react";
import Tile from "./Tile";
import Container from "react-bootstrap/Container";

class TileContainerR extends Component {
  buildTiles = () => {
    // const startIndex = this.props.page * 3
    const startIndex = this.props.page;
    return this.props.apartmentsR
      .slice(startIndex, startIndex + 1)
      .map((apartment) => (
        <Tile apartment={apartment} className="tiles" key={apartment.id} />
      ));
  };

  render() {
    return (
      <Container className="tile-container">{this.buildTiles()}</Container>
    );
  }
}

export default TileContainerR;
