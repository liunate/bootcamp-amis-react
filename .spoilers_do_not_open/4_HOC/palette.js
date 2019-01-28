import React from 'react';
//import { injectThemeColor } from './randomTheme';
//import { injectLoveTheme } from './loveTheme';

export class Palette extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.themeColor || 'grey'}}>
        ~太陽公公出來了~
      </div>
    );
  }
}

//export const SuperPalette = injectThemeColor(Palette);
//export const GirlPalette = injectLoveTheme(Palette);