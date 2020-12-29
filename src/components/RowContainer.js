import React, { Component } from "react";
import Row_ from "./Row_";
import Container from "react-bootstrap/Container";

class RowContainer extends Component {
  
  buildRow_s = () => {
    console.log(this.props.neighborhoods)
    return this.props.neighborhoods.map((element) => (
      <Row_ 
      name={element.name} 
      count= {element.apartments.length} 
      apartments={element.apartments} 
      />
    ));
  };

  render() {
    return (
      <Container fluid >
        {this.buildRow_s()}
      </Container>
    );
  }
}

export default RowContainer;
