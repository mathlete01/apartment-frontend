import React, { Component } from "react";
// import RowHeader from "./RowHeader";
import TileContainer from "./TileContainer";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Row_ extends Component {

  render() {
    return (
      <Row className="tile-row border-bottom">
        <Col className='border-right nav-color d-flex flex-column align-items-center justify-content-center' md={1}>
          <p className='text-center'>{ this.props.name }</p>
          <div className='circle shadow'>
            <p className='font-weight-bold'>{ this.props.count }</p>
          </div>
        </Col>
        <TileContainer 
          name={this.props.name}
          apartments={this.props.apartments}
        />
        {/* <Col className='d-flex no-gutters'>
        </Col> */}
      </Row>
    );
  }
}


export default Row_;
