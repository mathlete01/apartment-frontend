import React, { Component } from "react";
import Tile from "./Tile";
import TileBlank from "./TileBlank";
import Container from "react-bootstrap/Container";

class TileContainer extends Component {
  buildTiles = () => {
    return this.props.neighborhood.apartments.map((apartment) => (
      <Tile 
      apartment={apartment} 
      className="tiles" 
      key={apartment.id} 
      />
    ));
  };

  buildTilesBlank = () => {
    return (
      <TileBlank 
      className="tiles" 
      />
    )
  };

  render() {
    return (
      <Container className="tile-container">
        {this.props.neighborhood ? this.buildTiles() : this.buildTilesBlank() }
        </Container>
    );
  }
}

export default TileContainer;
