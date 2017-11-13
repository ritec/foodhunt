/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigatorIOS, Text } from 'react-native';
import { AppRegistry } from 'react-native';

import Login from './app/ios/login';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        navigatorBarHidden={true} 
        initialRoute={{ component: Login, title: 'Login',}}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('foodhunt', () => foodhunt);
