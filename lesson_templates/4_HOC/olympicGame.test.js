import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import en from './translations/en';
import { shallow } from 'enzyme';
//import { shallowWithIntl as shallow } from './enzyme_intl_helper';

configure({adapter: new Adapter()});

import OlympicGame from './olympicGame';

describe('OlympicGame', () => {
  it('should provide on screen instruction to pass Fool Proof Test(FPT)', () => {
    const olympicGame = shallow(<OlympicGame/>);

    const localizedTips = en['game.tips'];
    expect(olympicGame.find('.game-board').prop('title')).toEqual(localizedTips);
  });
});