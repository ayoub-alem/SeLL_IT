import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='AccountScreen' component={AccountScreen} />
    <Stack.Screen
      name='Messages'
      component={MessagesScreen}
      options={{
        cardStyle: {
          backgroundColor: colors.white,
          padding: 5,
          flex: 1,
        },
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
