import { View, StyleSheet } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && !netInfo.isInternetReachable)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 2,
    elevation: 2,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
