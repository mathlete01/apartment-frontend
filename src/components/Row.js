import React, { Component } from "react";
import RowHeader from "./RowHeader";
import RowContent from "./RowContent";

class Row extends Component {
  render() {
    return (
      <div>
        <RowHeader name={this.props.name} count={this.props.count}/>
        <RowContent apartments={this.props.apartments} />
      </div>
    );
  }
}

export default Row;
