import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const myOptions = {
  tabBarIcon: () => <></>,
  tabBarLabelStyle: { fontSize: 15 },
};

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name='ListingEdit'
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: ({}) => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEdit')}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name='plus-circle'
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name='Account'
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='account' size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
