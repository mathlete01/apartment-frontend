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
            <div>Filters</div>
          </Col>
          <Col className='border-bottom text-center'>
            <div>Range: $MIN - $MAX</div>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Column;
