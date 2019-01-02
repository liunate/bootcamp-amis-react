### What Are We Building?

In this tutorial, we'll show how to build an interactive tic-tac-toe game with React.

You can see what we'll be building here: **[Final Result(SPOILERS!)](https://codesandbox.io/s/64n9o67n9r)**. If the code doesn't make sense to you, or if you are unfamiliar with the code's syntax, don't worry! The goal of this tutorial is to help you understand React and its syntax.

### Prerequisites

We'll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you're coming from a different programming language. We'll also assume that you're familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.

If you need to review JavaScript, we recommend reading [this guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). Note that we're also using some features from ES6 -- a recent version of JavaScript. In this tutorial, we're using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) statements. You can use the [Babel REPL](babel://es5-syntax-example) to check what ES6 code compiles to.

## Setup for the Tutorial
Open up [Tic Tac Toe_Template](https://codesandbox.io/s/l73mljqz2z) in browser and `Fork` it.

## Overview

Now that you're set up, let's get an overview of React!

### What Is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

React has a few different kinds of components, but we'll start with `React.Component` subclasses:

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

We'll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

Here, ShoppingList is a **React component class**, or **React component type**. A component takes in parameters, called `props` (short for "properties"), and returns a hierarchy of views to display via the `render` method.

The `render` method returns a *description* of what you want to see on the screen. React takes the description and displays the result. In particular, `render` returns a **React element**, which is a lightweight description of what to render. Most React developers use a special syntax called "JSX" which makes these structures easier to write. The `<div />` syntax is transformed at build time to `React.createElement('div')`. The example above is equivalent to:

```javascript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

[See full expanded version.](babel://tutorial-expanded-version)

If you're curious, `createElement()` is described in more detail in the [API reference](/docs/react-api.html#createelement), but we won't be using it in this tutorial. Instead, we will keep using JSX.

JSX comes with the full power of JavaScript. You can put *any* JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.

The `ShoppingList` component above only renders built-in DOM components like `<div />` and `<li />`. But you can compose and render custom React components too. For example, we can now refer to the whole shopping list by writing `<ShoppingList />`. Each React component is encapsulated and can operate independently; this allows you to build complex UIs from simple components.

## Inspecting the Starter Code

This Starter Code [Tic Tac Toe_Template](https://codesandbox.io/s/l73mljqz2z) is the base of what we're building.  
 
Story/Requirement to play tic-tac-toe:
1. Start tic-tac-toe(the game) on page
2. Have a board with nine squares
3. Square to place mark
4. Nine squares to place different mark
5. Click on square to place mark
6. Take turns placing **X** and **O** onto the squares

We've provided the CSS styling so that you only need to focus on learning React and programming the tic-tac-toe game.

By inspecting the code, you'll notice that we have three React components:

* Square
* Board
* Game

The Square component renders a single `<button>` and the Board renders 9 squares. The Game component renders a board with placeholder values which we'll modify later. There are currently no interactive components.

## Story 1 Plug in React anywhere on page

On a HTML page, we have #root to start with the game
ReactDOM.render(...)
  - Attach HTML elements created by React framework onto the #root HTML element
  - intuitive JSX -> translated into javascript objects/functions by Babel;  
  _show [Babel REPL](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA)_
  - `<Game />`, React component class name follows **Upper Camel Case or Pascal Case** naming convention
  
## Story 2 Layout/Hierarchy by Render

`<Game />` / Class `Game`  
 React.Component.render()  
*ignore className(css)*  
*draw hierarchy `<div id="root">`, `<Game />` replaced by `<div className="game">`... down to `Board` and `Square`*

## Story 3 JS Expression in JSX: Update `Square` to render static marks

Update `Square.render()` to have static value 'X'

## Story 4 Props: Update `Board` to pass in any mark value as property
update `Board.render()` to have function call(js expression) in JSX  
extract function to pass in any mark value by property

## Story 5 State: Square to know **WHEN** to render
update `Square` to have `onClick` eventhandler to assign class property `this.value=v;`, `console.log(this.value)` --> explain why nothing rendered on screen  
update `Square` to setState and render on click  
Demonstrate state and props in React browser devtool plugin

## Story 6 Lifting States Up: Whose turn(X or O)?
`Square` itself does not know the other `Square`  
update `Board` to have `onClick` eventhandler pass in `Square` as props  
remove `value` from `square` state  
lift state `squares`  
add state `xIsNext`

## Create your own `Super Ultra` Tic-Tac-Toe `Remix Hyper Edition EX Plus Alpha`
some possible goals here...
- Conditional rendering by read state: Show next player(O or X) on page (by update render method)
- Set state: Click button to reset the game(NO BROWSER RELOAD!!!) (by assign new `squares` to state)
- Property: Have <em> last mark(by passing down shouldBold)