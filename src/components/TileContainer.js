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
    //build a check to see if apt id is in dislikedApts
    let apt = this.props.neighborhood.apartments[this.state.counter];
    return apt ? <Tile apartment={apt} className="tile" handleLike={this.props.handleLike} likedApts={this.props.likedApts}/> : null;
  };

  buildTileBlank = () => {
    console.log("BLANK");
    return <TileBlank className="tiles" />;
  };

  showArrowLeft = () => {
    return (
      <div className="vertical-center" onClick={this.prevApt}>
        <BsChevronLeft size="2em" />
      </div>
    );
  };

  showArrowRight = () => {
    return (
      <div className="vertical-center" onClick={this.nextApt}>
        <BsChevronRight size="2em" />
      </div>
    );
  };

  render() {
    return (
      <Container className="d-flex justify-content-center align-items-stretch" id={this.props.id}>
        {this.props.neighborhood
          ? this.props.neighborhood.apartments.length > 1
            ? this.showArrowLeft()
            : null
          : null}
        {this.props.neighborhood ? this.buildTile() : this.buildTileBlank()}
        {this.props.neighborhood
          ? this.props.neighborhood.apartments.length > 1
            ? this.showArrowRight()
            : null
          : null}
      </Container>
    );
  }
}

export default TileContainer;
