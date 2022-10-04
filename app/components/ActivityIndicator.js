import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.loadingAnimation}
        autoPlay
        source={require('../assets/animations/lf30_editor_6wue0iqa.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    position: 'absolute',
    elevation: 1, // zIndex for ios and elevation for Android
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  loadingAnimation: {
    width: 200,
  },
});

export default ActivityIndicator;
