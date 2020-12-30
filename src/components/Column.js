import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PriceFilter from './PriceFilter';

class Column extends Component {
  render() {
    return (
      <Container className="nav-color border-bottom" bg='light' fluid>
        <Row>
          <Col md={1} className='border-bottom border-right text-center'>
            <div>Filters</div>
          </Col>
          <Col className='border-bottom text-center'>
            <div>
                Range
                <PriceFilter 
                priceLow = {this.props.priceLow}
                priceHigh = {this.props.priceHigh}
                updatePriceLow = {this.props.updatePriceLow}
                updatePriceHigh = {this.props.updatePriceHigh}
                />
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Column;
