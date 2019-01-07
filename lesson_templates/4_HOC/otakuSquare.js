import React from 'react';
import { injectOtaku } from './otakuFeeder';

class Square extends React.Component {
  render() {
    return <h6>{this.props.line}</h6>;
  }
}

export const OtakuSquare = injectOtaku(Square);