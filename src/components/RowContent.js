import React, { Component } from "react";
import Tile from "./Tile"

class RowContent extends Component {
  render() {
    return (
        <div>
            Row Content
            <Tile />
            <Tile />
            <Tile />
        </div>
    )
  }
}

export default RowContent;