import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {
  // 정보를 받았는지 안받았는지 알려주는 indicator가 필요
  state = {
    isLoaded: false
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    const { isLoaded } = this.state;
    // turn into Objective-c or java
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the fucking Weather </Text>
            </View>
          )}
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
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FdF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
