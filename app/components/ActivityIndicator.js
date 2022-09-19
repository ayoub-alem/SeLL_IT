import React from 'react';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      source={require('../assets/animations/98432-loading.json')}
    />
  );
};

export default ActivityIndicator;
