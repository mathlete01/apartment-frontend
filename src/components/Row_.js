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
      <Container fluid className="rowClass">
        {/* <Container fluid > */}
        {/* {this.filterApartments()} */}
        <Row className="rowClass">
          <Col lg={1}>
            <RowHeader name={this.props.name} count={this.props.count} />
          </Col>
          <Col lg={1}>
            <TileContainer 
              name={this.props.name}
              apartments={this.props.apartments}
              // apartments={this.props.filteredApartments}
              // apartments={this.filterApartments()}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Row_;
