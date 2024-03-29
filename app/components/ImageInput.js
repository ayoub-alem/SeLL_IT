import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert('You need to enable permission to access the media library');
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5, // range from 0 (low quality) to 1 (high quality)
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading and image', error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name='camera' size={40} color={colors.gray} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImageInput;
