import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Tab = createBottomTabNavigator();
const myOptions = {
  tabBarIcon: () => <></>,
  tabBarLabelPosition: 'beside-icon',
  tabBarLabelStyle: { fontSize: 15 },
};

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name='Listings'
      component={ListingsScreen}
      options={myOptions}
    />
    <Tab.Screen
      name='ListingEdit'
      component={ListingEditScreen}
      options={myOptions}
    />
    <Tab.Screen name='Account' component={AccountScreen} options={myOptions} />
  </Tab.Navigator>
);

export default AppNavigator;
