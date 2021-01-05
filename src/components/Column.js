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
          <Col id="outer" className="pinstripeDark-color">
            <div 
              className="arrow-box-left d-flex align-items-center justify-content-center"
              onClick={() =>
                this.props.updatePrice(
                  this.props.priceLow - 100,
                  this.props.priceHigh - 100
                )
              }
            >
              <BsChevronDoubleLeft size="2em" />
              ${this.props.priceLow - 100} – ${this.props.priceHigh - 100}
            </div>
          </Col>

          <Col className="filter-bar border-bottom d-flex flex-row justify-content-center pinstripeLight-color"  id="center" >
            <div>
              {/* <p>Price Point</p> */}
              ${this.props.priceLow} – ${this.props.priceHigh}
            </div>
          </Col>
          <Col id="outer" className="pinstripeDark-color">
            <div  id="outer" 
              className="arrow-box-right d-flex align-items-center justify-content-center "
              onClick={() =>
                this.props.updatePrice(
                  this.props.priceLow + 100,
                  this.props.priceHigh + 100
                )
              }
            >
              ${this.props.priceLow + 100} – ${this.props.priceHigh + 100}
              <BsChevronDoubleRight size="2em" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Column;
