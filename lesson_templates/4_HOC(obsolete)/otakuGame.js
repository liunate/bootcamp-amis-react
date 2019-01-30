import React from "react";

import { injectOtaku } from './otakuFeeder';
import { OtakuBoard } from './otakuBoard';

class Game extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.line}</h1>
        <OtakuBoard/>
      </div>
    );
  }
}

export const OtakuGame = injectOtaku(Game);
