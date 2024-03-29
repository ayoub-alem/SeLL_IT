import { Text } from 'react-native';
import React from 'react';
import defaultStyles from '../config/defaultStyles';

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text {...otherProps} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
