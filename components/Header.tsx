import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {
  title?: string;
}
export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#6495ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
