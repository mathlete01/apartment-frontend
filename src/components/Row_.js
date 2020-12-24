import React, { Component } from "react";
import RowHeader from "./RowHeader";
import RowContent from "./RowContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Row_ extends Component {
  render() {
    return (
      <Container fluid className="row_Class">
        <Row>
          <Col sm={1}>
            <RowHeader name={this.props.name} count={this.props.count} />
          </Col>
          <Col sm={15}>
            <RowContent name={this.props.name} apartments={this.props.apartments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Row_;
