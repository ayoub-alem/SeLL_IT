import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.gray,
  },
});

export default ListItem;
