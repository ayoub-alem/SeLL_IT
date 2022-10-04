import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingAnimation: {
    width: 200,
  },
});

export default ActivityIndicator;
