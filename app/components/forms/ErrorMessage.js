import { StyleSheet } from 'react-native';
import React from 'react';
import AppText from '../AppText';
import colors from '../../config/colors';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.text}>{error}</AppText>;
};

const styles = StyleSheet.create({
  text: { color: colors.danger, fontSize: 15, marginLeft: 15 },
});

export default ErrorMessage;
