import { View, Text, Platform } from 'react-native';
import React from 'react';
import colors from './colors';

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS == 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark,
  },
};
