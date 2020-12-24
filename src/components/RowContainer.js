import React, { Component } from "react";
import Row from "./Row"

class RowContainer extends Component {
    
    
    render() {
      console.log(this.props.neighborhoods)
      return (
      <div>
          Row Container
          <Row neighborhoods={this.props.neighborhoods}/>
          <Row />
          <Row />
      </div>)
    }
  };

  export default RowContainer;