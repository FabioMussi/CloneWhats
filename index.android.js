import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/App';


const cloneWhats = props => (
  <App />
)

AppRegistry.registerComponent('cloneWhats', () => cloneWhats);
