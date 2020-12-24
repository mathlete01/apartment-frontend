import React, { Component } from "react";

class RowHeader extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.count}</p>
      </div>
    );
  }
}

export default RowHeader;
