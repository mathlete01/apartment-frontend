import React, { Component } from "react";
import Column from "./Column";
import RowContainer from "./RowContainer";

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
            //? Did not need to make this an anonymous function
            this.setState({
              neighborhoods: data,
            });
          })
        //   .then((data) => this.renderRows())
          .then((data) => console.log(data))

          .catch((error) => {
            console.error("Error:", error);
          });
      }

  render() {
    return (
      <div>
        Body
        <Column />
        <RowContainer neighborhoods={this.state.neighborhoods}/>
      </div>
    );
  }
}

export default Body;
