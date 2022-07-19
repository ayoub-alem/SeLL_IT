import { Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS == 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
