import React from 'react';
import { StyleSheet, Platform, Image, Text, ScrollView } from 'react-native';

//import firebase from 'react-native-firebase';

import { material, iOSColors, systemWeights } from 'react-native-typography';
import { View, TextInput, Button} from 'react-native-ui-lib';

import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './sampleCode/sample/test1.js';
import GrayScreen from './sampleCode/sample/test2.js';
import Test3 from './sampleCode/sample/test3.js';
import TestMap from './sampleCode/sample/test4.js';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="scarlet"
            component={ScarletScreen}
            title="Scarlet"
            initial
          />
          <Scene
            key="gray"
            component={GrayScreen}
            title="Gray"
          />
          <Scene
            key="test3"
            component={Test3}
            title="Test 3"
          />
          <Scene
            key="testmap"
            component={TestMap}
            title="Test Map Leaflet"
          />

        </Scene>
      </Router>
    );
  }
}
