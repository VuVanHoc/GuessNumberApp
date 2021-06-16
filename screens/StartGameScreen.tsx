import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

interface StartScreenProps {}
export default function StartGameScreen({}: StartScreenProps) {
  const onReset = () => {};
  const onConfirm = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.titleStartGame}>Start a new game</Text>
      <View style={styles.cardInput}>
        <Text>Choose a Number</Text>
        <TextInput textAlign="center" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={onReset} color="#ff4500" />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  cardInput: {
    marginVertical: 16,
    padding: 16,
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#fff',
    shadowColor: 'black',
    borderRadius: 8,
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStartGame: {
    fontSize: 20,
  },
  button: {
    width: '40%',
  },
});
