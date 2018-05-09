import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// var MapView = require('react-native-maps');
// <MapView
//   initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   }}
// />
import Camera from 'react-native-camera';

const ScarletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Scarlet Screen
      </Text>

      <Camera style={{flex: 1, width: 200, height : 200}}
            ref={cam => this.camera=cam}
            onBarCodeRead={(data)=>{
              //alert(JSON.stringify(data))
            }}
            aspect={Camera.constants.Aspect.fill}>

    </Camera>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4444',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ScarletScreen;
