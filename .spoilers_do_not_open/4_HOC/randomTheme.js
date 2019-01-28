import React from 'react';

function injectThemeColor(MonoComponent){
  class ThemeComponent extends React.Component{
    constructor (props){
      super(props);

      this.colors = this.loadUserPreference();
    }

    loadUserPreference () {
      return ['red', 'blue', 'yellow', 'green'];
    }

    render(){
      let randomIndex = Math.floor(Math.random() * 4);
      const randomColor = this.colors[randomIndex];

      return (
        <MonoComponent themeColor={randomColor} {...this.props}/>
      );
    }
  }
  
  return ThemeComponent;
}

export { injectThemeColor };