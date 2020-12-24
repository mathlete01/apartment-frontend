import React, { Component } from "react";
import Tile from "./Tile";
import Container from 'react-bootstrap/Container'

class RowContent extends Component {
  buildTiles = () => {
    return this.props.apartments.map((apartment) => (
      <Tile apartment={apartment} className="tiles"/>
    ));
  };

  render() {
    return (
      <Container className="rowContentClass">
        {this.buildTiles()}
        </Container>
    );
  }
}

export default RowContent;
