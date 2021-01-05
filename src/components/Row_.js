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
        </Col>
          <div className="tile-container d-flex justify-content-around">
            <TileContainer id="outer" className="pinstripeDark-color" neighborhood={this.props.left} />
            <TileContainer id="center" neighborhood={this.props.center} />
            <TileContainer id="outer" neighborhood={this.props.right} />
          </div>
      </Row>
    );
  }
}

export default Row_;
