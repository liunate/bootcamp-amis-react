import React from 'react';
import { FormattedDate, FormattedMessage, injectIntl } from 'react-intl';
import { Board } from './tic-tac-toe';

class OlympicGame extends React.Component {
  render () {
    return (
      <div>
        {/*<h1>Language: {navigator.language}</h1>*/}
        <h1><FormattedMessage id='game.title'/></h1>
        <h1>
          <FormattedMessage id='game.startFrom'/>
          <FormattedDate
            year={'numeric'}
            month={'long'}
            day={'2-digit'}
            weekday={'long'}
            value={Date.now()}/></h1>
        <div className="game-board" title={'Click me to play!'}>
        {/*<div className="game-board" title={<FormattedMessage id={'game.tips'}/>}>*/}
        {/*<div */}
          {/*className="game-board" */}
          {/*title={this.props.intl.formatMessage({id: 'game.tips'})}>*/}
          <Board/>
        </div>
      </div>
    );
  }
}

export default injectIntl(OlympicGame);
