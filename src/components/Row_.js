import React, { Component } from "react";
import TileContainer from "./TileContainer";
import Row from "react-bootstrap/Row";
// import RowHeader from "./RowHeader";
import Col from "react-bootstrap/Col";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

class Row_ extends Component {
  state = {
    page: 0,
  };

  changePageUp = () => {
    if (this.state.page >= this.props.apartments.length - 1) return;
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  changePageDown = () => {
    if (this.state.page <= 0) return;
    this.setState((prevState) => {
      return { page: prevState.page - 1 };
    });
  };

  render() {
    return (
      <Row className="tile-row border-bottom">
        {/* <RowHeader /> */}
        <Col
          className="border-right nav-color d-flex flex-column align-items-center justify-content-center"
          md={1}
        >
          <p className="text-center">{this.props.name}</p>
          {/* <div className="circle shadow">
            <p className="font-weight-bold">{this.props.count}</p>
          </div> */}
        </Col>
        <div className="tile-arrow-container d-flex justify-content-around">
          <div
            className="arrow-box-left d-flex align-items-center justify-content-center"
            onClick={this.changePageDown}
          >
            {/* <BsChevronDoubleLeft size="3em" /> */}
          </div>
          <TileContainer neighborhood={this.props.left} />
          <TileContainer neighborhood={this.props.center} />
          <TileContainer neighborhood={this.props.right} />
          <div
            className="arrow-box-right d-flex align-items-center justify-content-center"
            onClick={this.changePageUp}
          >
            {/* <BsChevronDoubleRight size="3em" /> */}
          </div>
        </div>
      </Row>
    );
  }
}

export default Row_;
