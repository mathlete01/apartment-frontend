import React, { Component } from "react";
import TileContainer from "./TileContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

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
        <div className='tile-arrow-container d-flex justify-content-around'>
          <div className='arrow-box-left d-flex align-items-center justify-content-center'><BsChevronDoubleLeft size='3em' /></div>
          <TileContainer 
            name={this.props.name}
            apartments={this.props.apartments}
          />
          <div className='arrow-box-right d-flex align-items-center justify-content-center'><BsChevronDoubleRight size='3em' /></div>
        </div>
      </Row>
    );
  }
}


export default Row_;
