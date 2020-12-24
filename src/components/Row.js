import React, { Component } from "react";
import RowHeader from "./RowHeader";
import RowContent from "./RowContent";

class Row extends Component {
  render() {
    return (
      <div>
        Row
        <RowHeader />
        <p>{this.props.name}</p>
        <p>{this.props.count}</p>
        <RowContent apartments={this.props.apartments} />
      </div>
    );
  }
}

export default Row;
