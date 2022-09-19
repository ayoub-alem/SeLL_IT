import { View, Modal, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            style={styles.doneAnimation}
            loop={false}
            source={require('../assets/animations/done.json')}
            autoPlay
            onAnimationFinish={onDone}
            speed={1.5}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  doneAnimation: {
    width: 200,
  },
});

export default UploadScreen;
