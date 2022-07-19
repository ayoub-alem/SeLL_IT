import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';

const AppButton = ({ title, onPress, buttonStyles, textStyles }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
