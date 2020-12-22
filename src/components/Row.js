import React, { Component } from "react";
import RowHeader from "./RowHeader"
import RowContent from "./RowContent"

class Row extends Component {
  render() {
    return (
    <div>
        Row
        <RowHeader />
        <RowContent />
    </div>)
  }
}

export default Row;