import React, { Component } from "react";
import RowHeader from "./RowHeader";
import TileContainer from "./TileContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Container, Row, Col } from "reactstrap";

class Row_ extends Component {
  
  // filterApartments = () => {
  //   this.setState({
  //       filteredApartments: this.props.apartments.filter(
  //         (apt) => apt.price >= this.props.priceLow && apt.price <= this.props.priceHigh
  //         ),
  //     })
  //     return this.props.filteredApartments
  // };

  render() {
    return (
      <Row className="border-bottom">
        <Col className='border-right nav-color d-flex flex-column align-items-center justify-content-center' md={1}>
          {/* <RowHeader name={this.props.name} count={this.props.count} /> */}
          <p className='text-center'>{ this.props.name }</p>
          <div className='circle shadow'>
            <p className='font-weight-bold'>{ this.props.count }</p>
          </div>
        </Col>
        <TileContainer 
          name={this.props.name}
          apartments={this.props.apartments}
        />
      </Row>
    );
  }
}

export default Row_;
