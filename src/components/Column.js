import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PriceFilter from "./PriceFilter";
import NeighborhoodDropdown from "./NeighborhoodDropdown";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

class Column extends Component {
  render() {
    return (
      <Container className="nav-color border-bottom" bg="light" fluid>
        <Row>
          <Col md={1} className="border-bottom border-right text-center">
            <NeighborhoodDropdown
              handleNeighborhoodChange={this.props.handleNeighborhoodChange}
              neighborhoods={this.props.neighborhoods}
              selectedIDs={this.props.selectedIDs}
            />
          </Col>

          <BsChevronDoubleLeft 
            size='2em' 
            className='price-arrow' 
            onClick={() =>
                this.props.updatePrice(
                  this.props.priceLow - 100,
                  this.props.priceHigh - 100
                )
              }
          />

          <Col className="d-flex align-items-center justify-content-center">
            <div>
              ${this.props.priceLow - 100} – ${this.props.priceHigh - 100}
            </div>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <div>
              ${this.props.priceLow} – ${this.props.priceHigh}
            </div>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <div>
              ${this.props.priceLow + 100} – ${this.props.priceHigh + 100}
            </div>
          </Col>

          <BsChevronDoubleRight 
            size='2em' 
            className='price-arrow' 
            onClick={() =>
                this.props.updatePrice(
                  this.props.priceLow + 100,
                  this.props.priceHigh + 100
                )
              }
          />
          
        </Row>
      </Container>
    );
  }
}

export default Column;
