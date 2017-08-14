import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import MainPage from './../MainPage/MainPage';
import ProfilePage from './../ProfilePage/ProfilePage';

import colors from './../../utils/colors';

export const Navigation = TabNavigator(
  {
    Main: {
      screen: MainPage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={ focused ? 'ios-home' : 'ios-home-outline' }
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={ focused ? 'ios-person' : 'ios-person-outline' }
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    showIcon: true,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
  },
);
