import React from 'react';

/**
 * Load XFE User Preference: *Preferred Color*
 * @return {string[]}
 */
function loadUserPreferenceFromXFE () {
  return ['red', 'blue', 'yellow', 'green'];
}

/**
 * Inject `themeColor` property to wrapped child React Component
 */
class ThemeSupplier extends React.Component {
  constructor (props) {
    super(props);
    this.colors = loadUserPreferenceFromXFE();
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

    // BETTER. Reuse `injectThemeColor` HOC defined below.
    const InjectedComponent = injectThemeColor(wrappedElement.type);
    return <InjectedComponent {...wrappedElementProps}/>;
  }
}

/**
 * Higher-Order Component(a function) which returns a React Component(which renders React Element injected with
 * `themeColor` property
 * @param WrappedComponent
 * @return React.Component Component enhanced with *themeColor* property
 */
function injectThemeColor (WrappedComponent) {
  // WRONG. This returns React Element instead of Component. This is NOT HOC.
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
        <WrappedComponent themeColor={randomColor} {...this.props}/>
      );
    }
  };
}

export { ThemeSupplier, injectThemeColor };