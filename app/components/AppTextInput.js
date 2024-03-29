import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/defaultStyles';

const AppTextInput = ({ icon, width = '100%', ...props }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.gray}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.gray}
        style={[defaultStyles.text, styles.textInput]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: '100%',
  },
});

export default AppTextInput;
