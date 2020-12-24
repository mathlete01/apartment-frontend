import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import { Container, Row, Col } from "reactstrap";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

class Column extends Component {
  render() {
    return (
      <Container className="columnClass" fluid>
        <Form>
          <Row form>
            <Col lg={2}>
              <Form.Group>
                <Form.Label >Price (Low)</Form.Label>
                <Form.Control
                  id="priceLow"
                  placeholder="$2,000/mo"
                />
              </Form.Group>
            </Col>
            <Col lg={2}>
              <Form.Group>
                <Form.Label >Price (High)</Form.Label>
                <Form.Control
                  id="priceHigh"
                  placeholder="$3,000/mo"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Column;
