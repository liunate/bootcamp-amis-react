import React from 'react';

function injectLoveTheme(MonoComponent){
  class ThemeComponent extends React.Component{
    constructor (props){
      super(props);

      this.colors = ['pink', 'deeppink', 'hotpink', 'lightpink'];
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

export { injectLoveTheme };