import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login'></AppButton>
        <AppButton
          title='Register'
          buttonStyles={styles.registerButton}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 20
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: colors.secondary,
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
});

export default WelcomeScreen;
