import { View, StyleSheet, TouchableOpacityComponent } from 'react-native';
import React from 'react';
import Icon from './Icon';
import AppText from './AppText';
import { TouchableOpacity } from 'react-native';

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CategoryPickerItem;
