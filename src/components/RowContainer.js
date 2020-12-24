import React, { Component } from "react";
import Row from "./Row";

class RowContainer extends Component {
  buildRows = () => {
    return this.props.neighborhoods.map((element) => (
      <Row name={element.name} count= {element.apartments.length} apartments={element.apartments}/>
    ));
  };

  render() {
    console.log(this.props.neighborhoods);
    return (
      <div>
        Row Container
        {this.buildRows()}
      </div>
    );
  }
}

export default RowContainer;
