import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'

class Column extends Component {
  render() {
    return (
      <Container className="nav-color border-bottom" bg='light' fluid>
        <Row>
          <Col md={1} className='border-bottom border-right text-center'>
            <div>Filters: /|\ </div>
          </Col>
          <Col className='border-bottom text-center'>
            <div>Range: $MIN - $MAX</div>
          </Col>
        </Row>
        {/* <Form>
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
        </Form> */}
      </Container>
    );
  }
}


export default Column;
