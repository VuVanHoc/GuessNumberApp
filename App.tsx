import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      <StartGameScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default App;
