import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import AppText from './AppText';

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default PickerItem;
