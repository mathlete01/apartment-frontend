import React, { Component } from "react";
import Tile from "./Tile";
import Container from "react-bootstrap/Container";

class TileContainer extends Component {
  buildTiles = () => {
    const startIndex = this.props.page * 3 
    return this.props.apartments.slice(startIndex, startIndex + 3).map((apartment) => (
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