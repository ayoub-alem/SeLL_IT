import React, { useState } from 'react';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import colors from './app/config/colors';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  const [imageUris, setImagesUri] = useState([]);
  const handleAdd = (uri) => setImagesUri([...imageUris, uri]);
  const handleRemove = (imageUri) =>
    setImagesUri(imageUris.filter((uri) => imageUri !== uri));

  return (
    <NavigationContainer theme={navigationThe}>
      <AuthNavigator></AuthNavigator>
    </NavigationContainer>
  );
}
