import React from 'react';
import { injectOtaku } from './otakuFeeder';
import { OtakuSquare } from './otakuSquare';

class Board extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.line}</h2>
        <div className="board-row">
          <OtakuSquare />
          <OtakuSquare />
          <OtakuSquare />
        </div>
        <div className="board-row">
          <OtakuSquare />
          <OtakuSquare />
          <OtakuSquare />
        </div>
        <div className="board-row">
          <OtakuSquare />
          <OtakuSquare />
          <OtakuSquare />
        </div>
      </div>
    );
  }
}

export const OtakuBoard = injectOtaku(Board);
