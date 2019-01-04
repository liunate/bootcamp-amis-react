/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import {IntlProvider, intlShape} from 'react-intl';
import {shallow, mount, render} from 'enzyme';

const enMessages = require('./translations/en').default;

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({locale: 'en', messages: enMessages}, {});
const {intl} = intlProvider.getChildContext();

/*
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
  return React.cloneElement(node, {intl});
}

/**
 * Equivalent to enzyme's 'mount' method.
 * @param {string} node React Component that requires react-intl.
 * @param {object} mountOptions Enzyme 'mount' method options.
 * @return {object}
 */
export function mountWithIntl(node, {context, disableLifecycleMethods} = {}) {
  const mountContext = Object.assign(
    {},
    context,
    {intl});

  const mountOptions = Object.assign(
    {context: mountContext},
    {childContextTypes: {intl: intlShape}},
    {disableLifecycleMethods: disableLifecycleMethods});

  return mount(
    nodeWithIntlProp(node),
    mountOptions);
}

/**
 * Equivalent to enzyme's 'shallow' method.
 * @param {string} node React Component that requires react-intl.
 * @param {object} shallowOptions Enzyme 'shallow' method options.
 * @return {object}
 */
export function shallowWithIntl(node, {context, disableLifecycleMethods} = {disableLifecycleMethods: false}) {
  const shallowContext = Object.assign(
    {},
    context,
    {intl});

  const shallowOptions = Object.assign(
    {context: shallowContext},
    {disableLifecycleMethods: disableLifecycleMethods});

  return shallow(
    nodeWithIntlProp(node),
    shallowOptions
  ).dive();
}

/**
 * Equivalent to enzyme's 'render' method.
 * @param {string} node React Component that requires react-intl.
 * @param {object} renderOptions Enzyme 'render' method options.
 * @return {object}
 */
export function renderWithIntl(node, {context, disableLifecycleMethods} = {}) {
  const renderContext = Object.assign(
    {},
    context,
    {intl});

  const renderOptions = Object.assign(
    {context: renderContext},
    {childContextTypes: {intl: intlShape}},
    {disableLifecycleMethods: disableLifecycleMethods});

  return render(
    nodeWithIntlProp(node),
    renderOptions);
}
