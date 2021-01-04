import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PriceFilter from './PriceFilter';
import NeighborhoodDropdown from './NeighborhoodDropdown';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

class Column extends Component {
  render() {
    return (
      <Container className="nav-color border-bottom" bg='light' fluid>
        <Row>
          <Col md={1} className='border-bottom border-right text-center'>
            <NeighborhoodDropdown 
              handleNeighborhoodChange={this.props.handleNeighborhoodChange} 
              neighborhoods={ this.props.neighborhoods } 
              selectedIDs={ this.props.selectedIDs }
            />
          </Col>
          <Col className='filter-bar border-bottom d-flex flex-row justify-content-center'>
          <div
            className="arrow-box-left d-flex align-items-center justify-content-center"
            onClick={() => this.props.updatePriceLow(this.props.priceLow-100, this.props.priceHigh - 100)}
          >
            <BsChevronDoubleLeft size="3em" />
          </div>
              <p>Price Point</p>
              <PriceFilter 
                priceLow = {this.props.priceLow}
                priceHigh = {parseInt(this.props.priceLow) + 99}
                updatePriceLow = {this.props.updatePriceLow}
                updatePriceHigh = {this.props.updatePriceHigh}
              />
              <div
            className="arrow-box-right d-flex align-items-center justify-content-center"
            onClick={() => this.props.updatePriceLow(this.props.priceLow+100, this.props.priceHigh + 100)}
          >
            <BsChevronDoubleRight size="3em" />
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Column;
