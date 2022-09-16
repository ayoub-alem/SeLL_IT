import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          size={40}
          color={colors.white}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 5,
    bottom: 30,
  },
  icon: {
    left: 10,
    top: 10,
  },
});

export default NewListingButton;
