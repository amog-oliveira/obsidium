import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './app/config/routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    "Warning: componentWillMount is deprecated",
    "Warning: componentWillReceiveProps is deprecated",
    "Warning: componentWillUpdate is deprecated", 
]);

export default class App extends React.Component {

    

  render() {
    return (
      <Navigation />
    );
  }
}
