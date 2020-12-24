import React, { Component } from "react"; 
import Badge from 'react-bootstrap/Badge'

class TierHeader extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <Badge variant="dark">{this.props.count}</Badge>
      </div>
    );
  }
}

export default TierHeader;
