import React, { Component } from "react";
import Tile from "./Tile";
import TileBlank from "./TileBlank";
import Container from "react-bootstrap/Container";
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";

class TileContainer extends Component {
  state = {
    counter: 0,
  };

  nextApt = () => {
    console.log("nextApt");
    console.log(this.state.counter);
    if (this.state.counter >= this.props.neighborhood.apartments.length - 1)
      return;
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  prevApt = () => {
    console.log("prevApt");
    if (this.state.counter <= 0) return;
    this.setState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  };

  buildTile = () => {
    
    let apt = this.props.neighborhood.apartments[this.state.counter];
    return apt ? <Tile apartment={apt} className="tiles" /> : null;
  };

  buildTileBlank = () => {
    console.log("BLANK");
    return <TileBlank className="tiles" />;
  };

  showCount = () => {
    return (
      <div>
        <div
          className="arrow-box-left d-flex align-items-center justify-content-center"
          onClick={this.prevApt}
        >
          <BsChevronLeft size="2em" />
        </div>
        <div className="circle shadow">
          <p className="font-weight-bold">
            {this.props.neighborhood.apartments.length}
          </p>
        </div>
        <div
          className="arrow-box-right d-flex align-items-center justify-content-center"
          onClick={this.nextApt}
        >
          <BsChevronRight size="2em" />
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container className="tile-container">
        {/* <div className="tile-arrow-container d-flex justify-content-around"> */}
        <div>
          {this.props.neighborhood ? this.buildTile() : this.buildTileBlank()}
          {this.props.neighborhood ? this.props.neighborhood.apartments.length > 1 ? this.showCount() : null : null}
        </div>
      </Container>
    );
  }
}

export default TileContainer;
