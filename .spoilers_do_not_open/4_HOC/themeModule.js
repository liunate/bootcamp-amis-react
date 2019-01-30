import React from 'react';

/**
 * Inject `themeColor` property to wrapped child React Component
 */
class ThemeSupplier extends React.Component {
  constructor (props) {
    super(props);
    //    this.colors = loadUserPreferenceFromXFE();
  }

  render () {
    const wrappedElement = this.props.children;
    const wrappedElementProps = wrappedElement.props;

    // THIS IS OKAY, but it's duplicate to `injectThemeColor` HOC defined below
    //    const randomIndex = Math.floor(Math.random() * 4);
    //    const randomColor = this.colors[randomIndex];
    //
    //    return (
    //      <wrappedElement.type themeColor={randomColor} {...wrappedElementProps}/>
    //    );

    // BETTER, reusing `injectThemeColor` HOC defined below.
    const InjectedComponent = injectThemeColor(wrappedElement.type);

    // Since we add back the original properties on `wrappedElement`, this is similar to `React.cloneElement` but we 
    // *enhance* the component before we clone it.
    return <InjectedComponent {...wrappedElementProps}/>;
  }
}

/**
 * Load XFE User Preference: *Preferred Color*
 * @return {string[]}
 */
function loadUserPreferenceFromXFE () {
  return ['red', 'blue', 'yellow', 'green'];
}

/**
 * Higher-Order Component(a function) which returns a React Component(which renders React Element injected with
 * `themeColor` property
 * @param WrappedComponent
 * @return React.Component Component enhanced with *themeColor* property
 */
function injectThemeColor (WrappedComponent) {
  // WRONG. This returns Component element instead of Component. This is NOT HOC.
  //  return <ThemeSupplier>{wrappedComponent}</ThemeSupplier>;
  return class InjectedComponent extends React.Component {
    constructor (props) {
      super(props);
      this.colors = loadUserPreferenceFromXFE();
    }

    render () {
      const randomIndex = Math.floor(Math.random() * 4);
      const randomColor = this.colors[randomIndex];

      return (
        // Note: This is not returned by the function. This is part of the Component `InjectedComponent`.
        <WrappedComponent themeColor={randomColor} {...this.props}/>
      );
    }
  };
}

export { ThemeSupplier, injectThemeColor };