import React, { Component } from "react";
import Tier from "./Tier";
import Container from "react-bootstrap/Container";

class TierContainer extends Component {
  buildTiers = () => {
    return this.props.neighborhoods.map((element) => (
      <Tier name={element.name} count= {element.apartments.length} apartments={element.apartments}/>
    ));
  };

  render() {
    console.log(this.props.neighborhoods);
    return (
      <Container>
        {this.buildTiers()}
      </Container>
    );
  }
}

export default TierContainer;
