import React from "react";
export class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mark = this.props.shouldEmphasize ? (
      <em>{this.props.value}</em>
    ) : (
      this.props.value
    );
    return (
      <button className="square" onClick={() => this.props.onMark()}>
        {mark}
      </button>
    );
  }
}

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      history: []
    };
  }

  resetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      history: []
    });
  };

  handleMark = i => {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";

    const history = this.state.history.slice();
    history.push(i);

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      history: history
    });
  };

  renderSquare(i) {
    const isLastMark = i === this.state.history.slice(-1)[0];
    return (
      <Square
        value={this.state.squares[i]}
        onMark={() => this.handleMark(i)}
        shouldEmphasize={isLastMark}
      />
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.resetGame}>Reset Game</button>
        <div className="status">Game: Tic-Tac-Toe</div>
        <div>Next Player: {this.state.xIsNext ? "X" : "O"}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}
