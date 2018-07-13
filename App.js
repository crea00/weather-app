import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // turn into Objective-c or java
      <View style={styles.container}>
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />
        <View style={styles.redView} />
        <View style={styles.yellowView} />

      </View>
    );
  }
}

// HTML, CSS에서는 flex direction의 default가 row
// RN에서는 flex direction의 default가 column
// flex속성은 각 컨테이너가 다른 컨테이너에 비례하여 최대한 공간을 차지한다는 뜻
// Property는 Camelcase사용 + 모든 vaule은 반드시 string
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  redView: {
    height: 50,
    width: 50,
    backgroundColor: 'red',

  },
  yellowView: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',

  }
});
