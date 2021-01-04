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
    return apt ? <Tile apartment={apt} className="tile" /> : null;
  };

  buildTileBlank = () => {
    console.log("BLANK");
    return <TileBlank className="tiles" />;
  };

  showCount = () => {
    return (
      <div>
        <div className="imgContainer">
          <div className="other" onClick={this.prevApt}>
            <BsChevronLeft size="2em" />
          </div>
          <div className="circle shadow">
            <p className="font-weight-bold">
              {this.props.neighborhood.apartments.length}
            </p>
          </div>
        </div>
        <div className="other" onClick={this.nextApt}>
          <BsChevronRight size="2em" />
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container className='d-flex justify-content-center align-items-stretch'>
          {this.props.neighborhood ? this.buildTile() : this.buildTileBlank()}
          {/* {this.props.neighborhood
            ? this.props.neighborhood.apartments.length > 1
              ? this.showCount()
              : null
            : null} */}
      </Container>
    );
  }
}

export default TileContainer;
