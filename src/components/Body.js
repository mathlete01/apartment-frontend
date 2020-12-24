import React, { Component } from "react";
import RowContainer from "./RowContainer";
// import Container from "react-bootstrap/Container";
import { Container, Col } from 'reactstrap';

const API = "http://localhost:3000/neighborhoods";

class Body extends Component {
Z
    state = {
        neighborhoods: [],
      };

    componentDidMount() {
        console.log(`* componentDidMount`)
        fetch(API)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              neighborhoods: data,
            });
          })
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Error:", error);
          });
      }

  render() {
    return (
      <Container fluid>
        <Col />
        <RowContainer neighborhoods={this.state.neighborhoods}/>
      </Container>
    );
  }
}

export default Body;
