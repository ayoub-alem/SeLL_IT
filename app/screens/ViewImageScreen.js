import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name='close'
        color={colors.white}
        size={35}
      ></MaterialCommunityIcons>
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name='trash-can-outline'
        color={colors.white}
        size={35}
      ></MaterialCommunityIcons>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
    zIndex: 1,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '80%',
  },
});

export default ViewImageScreen;
