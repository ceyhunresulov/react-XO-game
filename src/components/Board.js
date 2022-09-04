import React, { Component } from "react";
import { ButtonGroup, Container, Button, Row } from "reactstrap";
import Square from "./Square";

export default class Board extends Component {
  state = {
    data: [null, null, null, null, null, null, null, null, null],
    auth: 0,
    winner: "",
    color: [false, false, false, false, false, false, false, false, false],
  };
  getX = async (e) => {
    if (
      this.state.winner === "X is winner" ||
      this.state.winner === "O is winner"
    )
      return;
    let newState = this.state.data.slice();
    if (this.state.auth % 2 === 0) {
      this.setState({ auth: this.state.auth + 1 });
      newState[e] = "X";
    } else {
      this.setState({ auth: this.state.auth + 1 });
      newState[e] = "O";
    }
    await this.setState({ data: newState });
    await this.getWinner(this.state.data);
  };

  getWinner = (data) => {
    let line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    line.forEach((line) => {
      let [a, b, c] = line;
      if ((data[a] === "X") & (data[a] === data[b]) & (data[a] === data[c])) {
        let colorState = this.state.color.slice();
        colorState[a] = true;
        colorState[b] = true;
        colorState[c] = true;
        this.setState({ winner: "X is winner", color: colorState });
      } else if (
        (data[a] === "O") &
        (data[a] === data[b]) &
        (data[a] === data[c])
      ) {
        let colorState = this.state.color.slice();
        colorState[a] = true;
        colorState[b] = true;
        colorState[c] = true;
        this.setState({ winner: "O is winner", color: colorState });
      } else {
        if (!data.some((value) => value === null))
          this.setState({ winner: "Not a winner" });
      }
    });
  };

  startAgain = () => {
    this.setState({
      data: Array(9).fill(null),
      auth: 0,
      winner: "",
      color: Array(9).fill(false),
    });
  };
  render() {
    return (
      <Container>
        <h1 className="text-center">game X & O</h1>
        <Row className="h-auto mt-5">
          <ButtonGroup className="d-flex justify-content-center">
            <Square
              color={this.state.color[0]}
              value={this.state.data[0]}
              getX={this.getX}
              event={0}
            ></Square>
            <Square
              color={this.state.color[1]}
              value={this.state.data[1]}
              getX={this.getX}
              event={1}
            ></Square>
            <Square
              color={this.state.color[2]}
              value={this.state.data[2]}
              getX={this.getX}
              event={2}
            ></Square>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup className="d-flex justify-content-center">
            <Square
              color={this.state.color[3]}
              value={this.state.data[3]}
              getX={this.getX}
              event={3}
            ></Square>
            <Square
              color={this.state.color[4]}
              value={this.state.data[4]}
              getX={this.getX}
              event={4}
            ></Square>
            <Square
              color={this.state.color[5]}
              value={this.state.data[5]}
              getX={this.getX}
              event={5}
            ></Square>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup className="d-flex justify-content-center">
            <Square
              color={this.state.color[6]}
              value={this.state.data[6]}
              getX={this.getX}
              event={6}
            ></Square>
            <Square
              color={this.state.color[7]}
              value={this.state.data[7]}
              getX={this.getX}
              event={7}
            ></Square>
            <Square
              color={this.state.color[8]}
              value={this.state.data[8]}
              getX={this.getX}
              event={8}
            ></Square>
          </ButtonGroup>
          <Button
            className="w-auto bg-dark my-3  mx-auto"
            onClick={() => this.startAgain()}
          >
            start again game
          </Button>
          <h2 className="text-center">{this.state.winner}</h2>
        </Row>
      </Container>
    );
  }
}
