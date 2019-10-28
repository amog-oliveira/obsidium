import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './app/config/routes';

YellowBox.ignoreWarnings([
    "Warning: componentWillMount is deprecated",
    "Warning: componentWillReceiveProps is deprecated",
    "Warning: componentWillUpdate is deprecated", 
]);

export default function App() {
  return <Routes />
}
