import React, { Component } from "react";
import Tile from "./Tile";
import TileBlank from "./TileBlank";
import Container from "react-bootstrap/Container";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

class TileContainer extends Component {
  state = {
    counter: 0,
  };

  nextApt = () => {
    switch (true) {
      case this.state.counter >= this.props.neighborhood.apartments.length - 1:
        this.setState({
          counter: this.props.neighborhood.apartments.length - 1,
        });
        break;
      default:
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
    }
  };

  prevApt = () => {
    switch (true) {
      case this.state.counter === 0:
        break;
      default:
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
    }
  };

  buildTile = () => {
    let apt = this.props.neighborhood.apartments[this.state.counter];
    return apt ? <Tile apartment={apt} className="tile" /> : null;
  };

  buildTileBlank = () => {
    console.log("BLANK");
    return <TileBlank className="tiles" />;
  };

  showArrowLeft = () => {
    return (
      <div
        className="tile-left-arrow d-flex justify-content-center align-items-center"
        onClick={this.prevApt}
      >
        {this.state.counter <= 0 ? (
          <BsChevronLeft size="2em" color="d8d8d8" />
        ) : (
          <BsChevronLeft size="2em" color="black" />
        )}
      </div>
    );
  };

  showArrowRight = () => {
    return (
      <div
        className="tile-right-arrow d-flex justify-content-center align-items-center"
        onClick={this.nextApt}
      >
        {this.state.counter >= this.props.neighborhood.apartments.length - 1 ? (
          <BsChevronRight size="2em" color="d8d8d8" />
        ) : (
          <BsChevronRight size="2em" color="black" />
        )}
      </div>
    );
  };

  render() {
    // debugger;
    return (
      <Container
        className="tile d-flex justify-content-center align-items-stretch"
        id={this.props.id}
      >
        {this.props.neighborhood
          ? this.props.neighborhood.apartments.length > 1
            ? this.showArrowLeft()
            : null
          : null}
        {/* {this.props.neighborhood ? this.buildTile() : this.buildTileBlank()} */}
        {this.props.neighborhood ? this.buildTile() : null}
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
