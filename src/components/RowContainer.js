import React, { Component } from "react";
import Row from "./Row"

class RowContainer extends Component {
    render() {
      return (
      <div>
          Row Container
          <Row/>
          <Row />
          <Row />
      </div>)
    }
  };

  export default RowContainer;