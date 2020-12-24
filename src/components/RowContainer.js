import React, { Component } from "react";
import Row from "./Row"

class RowContainer extends Component {
    
    
    render() {
        console.log(this.listings)
      return (
      <div>
          Row Container
          <Row listings={this.listings}/>
          <Row />
          <Row />
      </div>)
    }
  };

  export default RowContainer;