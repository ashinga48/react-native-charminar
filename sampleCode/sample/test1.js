import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import SampleDBOperations from '../firebaseTest';
const ScarletScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}  onPress={() => Actions.gray()}>
    GOTO Test2
    </Text>

    <Text style={styles.welcome}  onPress={() => Actions.test3()}>
    GOTO Test3
    </Text>

    <Text style={styles.welcome}  onPress={() => Actions.testmap()}>
    GOTO Test3
    </Text>

      <SampleDBOperations />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ScarletScreen;
