import React from 'react';

function injectBackgroundColor(MonoComponent){
  class BackgroundColorComponent extends React.Component{
    constructor (props){
      super(props);

      this.colors = ['red', 'blue', 'yellow', 'green'];
    }
    
    render(){
      let randomIndex = Math.floor(Math.random() * 4);
      const randomColor = this.colors[randomIndex];

      return (
        <MonoComponent backgroundColor={randomColor}/>
      );
    }
  }
  
  return BackgroundColorComponent;
}

export { injectBackgroundColor };