import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();
const myOptions = {
  tabBarIcon: () => <></>,
  tabBarLabelPosition: 'beside-icon',
  tabBarLabelStyle: { fontSize: 15 },
};

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='Feed' component={FeedNavigator} options={myOptions} />
    <Tab.Screen
      name='ListingEdit'
      component={ListingEditScreen}
      options={myOptions}
    />
    <Tab.Screen
      name='Account'
      component={AccountNavigator}
      options={myOptions}
    />
  </Tab.Navigator>
);

export default AppNavigator;
