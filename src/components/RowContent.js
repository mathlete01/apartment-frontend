import React, { Component } from "react";
import Tile from "./Tile";

class RowContent extends Component {
  buildTiles = () => {
    return this.props.apartments.map((apartment) => (
      <Tile 
      price={apartment.price} 
      square_feet={apartment.square_feet} 
      bedrooms={apartment.bedrooms} 
      bathrooms={apartment.bathrooms} 
      title={apartment.title} 
      description={apartment.description} 
      images={apartment.images} 
      />
    ));
  };

  render() {
    return (
      <div>
        Row Content
        {this.buildTiles()}
      </div>
    );
  }
}

export default RowContent;
