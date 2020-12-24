import React, { Component } from "react";
import TierHeader from "./TierHeader";
import TierContent from "./TierContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Tier extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={4}>
            <TierHeader name={this.props.name} count={this.props.count} />
          </Col>
          <Col>
            <TierContent apartments={this.props.apartments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tier;
