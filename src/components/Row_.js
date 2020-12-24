import React, { Component } from "react";
import RowHeader from "./RowHeader";
import TileContainer from "./TileContainer";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Container, Row, Col } from 'reactstrap';

class Row_ extends Component {
  render() {
    return (
      <Container fluid className="rowClass">
      {/* <Container fluid > */}
        <Row>
          <Col lg={1}>
            <RowHeader name={this.props.name} count={this.props.count} />
          </Col>
          <Col lg={1}>
            <TileContainer name={this.props.name} apartments={this.props.apartments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Row_;
