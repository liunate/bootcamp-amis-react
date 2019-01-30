import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Palette } from './palette';
import {ThemeSupplier} from './themeModule';
import { SuperPalette } from './palette';

/*
React, Enzyme
 */
//ReactDOM.render(
//  <ThemeSupplier>
//    <Palette/>
//  </ThemeSupplier>
// , document.getElementById("root"));

/* 
React Intl
 */
//import OlympicGame from './olympicGame';
//
//import { IntlProvider, addLocaleData } from 'react-intl';
//import en from 'react-intl/locale-data/en';
//import enMessages from './translations/en';
//import zh from 'react-intl/locale-data/zh';
//import zhMessages from './translations/zh';
//addLocaleData([...en, ...zh]);
//const supportedMessageBundles = {
//  'en': enMessages,
//  'zh': zhMessages,
//};
//
//const mainLanguage = navigator.language.split(/[-_]/)[0];
////const mainLanguage = 'zh';
//
//ReactDOM.render(
//  <IntlProvider locale={mainLanguage} messages={supportedMessageBundles[mainLanguage]}>
//    <OlympicGame/>
//  </IntlProvider>
//  , document.getElementById('root'));
//
//


/*
HOC 1
 */
//ReactDOM.render(
//  <ThemeSupplier>
//    <Palette/>
//  </ThemeSupplier>
//  , document.getElementById("root"));

/*
HOC 2
 */
ReactDOM.render(
  <SuperPalette/>
  , document.getElementById("root"));