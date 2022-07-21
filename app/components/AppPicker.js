import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import AppButton from './AppButton';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.gray}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.gray}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={'slide'}>
        <Screen>
          <AppButton
            buttonStyles={styles.button}
            textStyles={styles.textButton}
            title={'Close'}
            onPress={() => setModalVisible(false)}
          ></AppButton>
          <FlatList
            data={items}
            keyExtractor={(category) => category.value}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.gray,
    flex: 1,
  },
  text: {
    flex: 1,
  },

  textButton: {
    fontSize: 15,
    color: colors.primary,
  },
});

export default AppPicker;
