React and Unit Test

# Prerequisites
know HTML, js and class
  - class
    - constructor
    - property
    - function

# React Component: Tic-Tac-Toe(Render, Component, Property, State)
final: github https://github.com/liunate/bootcamp-amis-jest.git  
Tic Tac Toe_Template https://codesandbox.io/s/l73mljqz2z    
~~(https://codepen.io/nateflakyrobot/pen/JwJmga?editors=0010)~~  
Tic Tac Toe_Nate https://codesandbox.io/s/64n9o67n9r  
~~(https://codepen.io/nateflakyrobot/pen/OrgaQb?editors=0011)~~

Story/Requirement:
Play tic-tac-toe
1. Start tic-tac-toe(the game) on page
2. Have a board with nine squares
3. Square to place mark
4. Nine squares to place different mark
5. Click on square to place mark
6. Take turns placing **X** and **O** onto the squares

Story 1 Plug in React anywhere on page
On a HTML page, we have #root to start with the game
ReactDOM.render(...)
  - Attach HTML elements created by React framework onto the #root HTML element
  - intuitive JSX -> translated into javascript objects/functions by Babel; 
  _show [Babel REPL]([Babel · The compiler for next generation JavaScript](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=6.26.0&envVersion=))_
  - `<Game />`, React component class name follows **Upper Camel Case or Pascal Case** naming convention

Story 2 Layout/Hierarchy by Render  
`<Game />, class Game` React.Component.render()
*ignore className(css)*  
*draw hierarchy `<div id="root">`, `<Game />` replaced by `<div className="game">`... down to `Board` and `Square`*

Story 3 JS Expression in JSX: Update `Square` to render static mark  
Update `Square.render()` to have static value 'X'

Story 4 Props: Update `Board` to pass in any mark value as property  
update `Board.render()` to have function call(js expression) in JSX  
extract function to pass in any mark value by property

Story 5 State: Square to know **WHEN** to render  
update `Square` to have `onClick` eventhandler to assign class property `this.value=v;`, `console.log(this.value)` --> explain why nothing rendered on screen  
update `Square` to setState and render on click  
Demonstrate state and props in React browser devtool plugin

Story 6 Lifting States Up: Whose turn(X or O)?  
`Square` itself does not know the other `Square`  
update `Board` to have `onClick` eventhandler pass in `Square` as props  
remove `value` from `square` state  
lift state `squares`

add state `xIsNext`

**Capture the flag **  
some possible goals here...
- Conditional rendering by read state: Show next player(O or X) on page (by update render method)
- Set state: Click button to reset the game(NO BROWSER RELOAD!!!) (by assign new `squares` to state)
- Property: Have <em> last mark(by passing down shouldBold) italic style</em>

# Enzyme
go thru test cases: shallow, mount, render, Enzyme Selector(CSS, Prop, React Constructor)  
Capture the flag: 3 test cases
  
# React Intl
setup(locale, translation file)  
`<FormattedMessage>, <FormattedDate>`  
Components
capture the flag: add one more language 'ja' with `<FormattedMessage>`(any message at any place is okay!)

# Higher-Order Component
Imperative API, intlInject and HOC  
EnzymeHelper  
OtakuFeeder  
capture the flag: create your own themeable-HOC(theme class) 
