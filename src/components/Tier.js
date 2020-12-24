import React, { Component } from "react";
import RowHeader from "./RowHeader";
import RowContent from "./RowContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Tier extends Component {
  render() {
    return (
      <Container fluid className="tierClass">
        <Row>
          <Col>
            <RowHeader name={this.props.name} count={this.props.count} />
          </Col>
          <Col lg="auto">
            <RowContent name={this.props.name} apartments={this.props.apartments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tier;
