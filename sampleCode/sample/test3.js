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
import { ArtyCharty } from 'arty-charty';

const ArtyChartyComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        SVG Charts
      </Text>

      <ArtyCharty
      interactive={false}
      yAxisLeft={{numberOfTicks: 5}}
      animated={false}
      clickFeedback={false}
      data={[
         {
            type: 'area',
            data: [{value: 3.48}, {value: 1.38}, {value: 6.73}, {value: 4.62}, {value: 3.14}],
            highCol: 'rgb(255,0,0)',
            lowCol: 'rgb(255,165,0)'
        },
        {
            type: 'bars',
            data: [{value: 2.16}, {value: 4.83}, {value: 4.04}, {value: 4.30}, {value: 5.26}],
            highCol: 'rgb(125,0,255)',
            lowCol: 'rgb(0,255,0)'
        },
        {
            type: 'line',
            data: [{value: 4.47}, {value: 5.99}, {value: 1.21}, {value: 3.17}, {value: 4.24}],
            lineColor: 'green'
        },
        {
            type: 'spline',
            data: [{value: 3.10}, {value: 2.61}, {value: 3.89}, {value: 1.54}, {value: 1.32}],
            lineColor: 'rgba(255,255,0,.8)'
        },
      ]}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ArtyChartyComp;
