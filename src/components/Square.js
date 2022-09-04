import React, { Component } from "react";

export default class Square extends Component {
  render() {
    return (
      <div className={this.props.color ? "bg-success" : "bg-dark"}>
        <h1
          className="text-white border d-flex justify-content-center align-items-center m-0"
          style={{ width: "50px", height: "50px" }}
          onClick={() => this.props.getX(this.props.event)}
        >
          {this.props.value}
        </h1>
      </div>
    );
  }
}
