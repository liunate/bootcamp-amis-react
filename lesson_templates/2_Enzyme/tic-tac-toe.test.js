import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';

configure({adapter: new Adapter()});

import { Game, Board, Square } from './tic-tac-toe';

describe('Game', () => {
  it('should have board(shallow)', () => {
    const game = shallow(<Game/>);

    /**
     * [ShallowWrapper].containsMatchingElement => boolean
     * https://airbnb.io/enzyme/docs/api/ShallowWrapper/containsMatchingElement.html
     */
    expect(game.containsMatchingElement(<Board/>)).toEqual(true);
    //    console.log(game.debug());
    // Good Cases
    //    expect(game.containsMatchingElement(<Square/>)).toEqual(false);
    //    expect(game.matchesElement(<Board/>)).toEqual(false);
    //    expect(game.matchesElement(
    //      (<div>
    //        <div>
    //          Game: Tic-Tac-Toe
    //        </div>
    //        <div>
    //          <Board/>
    //        </div>
    //      </div>))).toEqual(true);
  });
});

describe('Game', () => {
  it('should have board(mount)', () => {
    const game = mount(<Game/>);

    expect(game.containsMatchingElement(<Square/>)).toEqual(true);
    //    console.log(game.debug());
  });
});

describe('Game', () => {
  it('should have board(render)', () => {
    // Cheerio wrapper for traversing/manipulating the DOM
    const game = render(<Game/>);

    /**
     * `expect(actual) => [Matcher].matcher_func(arg: object(s)/value(s) or [Asymmetric_Matcher])`
     * https://jestjs.io/docs/en/expect#expectstringcontainingstring
     */
    expect(game.toString()).toEqual(expect.stringContaining('square'));
    //    console.log(game.toString());

    // variable 'game' does not have containsMatchingElement function
    //    expect(game.containsMatchingElement(<Square/>)).toEqual(false);    
    // variable 'game' does not have debug function
    //    game.debug();
  });
});

/**
 * Enzyme Selectors
 * https://airbnb.io/enzyme/docs/api/selector.html
 */
describe('Board', () => {
  // Enzyme Selectors - CSS Selector
  it('should show squares in row-by-row fashion', () => {
    const board = shallow(<Board/>);

    expect(board.find('.board-row').length).toBeGreaterThan(0);
  });

  // Enzyme Selectors - Prop Selector(similar to JavaScript property)
  it('should decide whether to emphasize the mark inside of square', () => {
    const board = shallow(<Board/>);
    board.instance().handleMark(5);

    expect(board.find('[shouldEmphasize=true]').length).toBe(1);
    // Bad Cases(quotes around true)
    //        expect(board.find("[shouldEmphasize='true']").length).toBe(1);
  });

  // Enzyme Selectors - React Component Constructor
  it('should contains 9 x squares', () => {
    const board = shallow(<Board/>);

    expect(board.find(Square)).toHaveLength(9);
  });

  it('should show it\'s O\'s turn turn after first turn(X)', () => {
    const board = shallow(<Board/>);
    board.instance().handleMark(5);

    expect(board.debug()).toEqual(expect.stringContaining('O'));
  });
});

describe('Square', () => {
  it('should be clickable', () => {
    const square = shallow(<Square/>);

    expect(square.exists('button')).toEqual(true);
    // Awkward Case
    //   Expected value to equal:
    //    true
    //    expect(false).toEqual(square.exists('button'));
  });

  it.skip('should render mark when specified', () => {
    expect(false).toBeTruthy();
  });

  it.skip('should be able to render italic mark', () => {
    expect(false).toBeTruthy();
  });

  it.skip('should notify itself is clicked', () => {
    // Simulate events
    // https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
    expect(false).toBeTruthy();
  });
});