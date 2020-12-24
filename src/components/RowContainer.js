import React, { Component } from "react";
import Row_ from "./Row_";
// import Container from "react-bootstrap/Container";
import { Container } from 'reactstrap';

class RowContainer extends Component {
  buildRow_s = () => {
    return this.props.neighborhoods.map((element) => (
      <Row_ name={element.name} count= {element.apartments.length} apartments={element.apartments}/>
    ));
  };

  render() {
    console.log(this.props.neighborhoods);
    return (
      <Container fluid >
        {this.buildRow_s()}
      </Container>
    );
  }
}

export default RowContainer;
