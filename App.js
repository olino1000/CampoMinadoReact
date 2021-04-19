import React, {Component} from 'react';
import params from './src/param'
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text styles={styles.welcome}>Iniciando Mines!!!</Text>
        <Text styles={styles.instructions}>Tamanho do campo: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10
  }
});

