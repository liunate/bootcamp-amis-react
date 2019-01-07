import React from 'react';
import { injectBackgroundColor } from './randomTheme';

export class Palette extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.backgroundColor || 'grey'}}>
        ~太陽公公出來了~
      </div>
    );
  }
}

export const SuperPalette = injectBackgroundColor(Palette);