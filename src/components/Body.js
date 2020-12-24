import React, { Component } from "react";
import Column from "./Column";
import RowContainer from "./RowContainer";

const API = "http://localhost:3000/listings";

class Body extends Component {
Z
    state = {
        listings: [],
      };

    componentDidMount() {
        console.log(`* componentDidMount`)
        fetch(API)
          .then((res) => res.json())
          .then((data) => {
            //? Did not need to make this an anonymous function
            this.setState({
              listings: data,
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
        <RowContainer listings={this.state.listings}/>
      </div>
    );
  }
}

export default Body;
