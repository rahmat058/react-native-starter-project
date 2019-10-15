import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import customDrawerContentComponent from './CustomDrawerComponent';
import { colors } from '../styles';
import { Icon } from '../utils/fonttello/setFonttelloIcon';

import ScreenOne from '../screens/HomeScreen/ScreenOne';
import ScreenTwo from '../screens/HomeScreen/ScreenTwo';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const { width } = Dimensions.get('window');
const drawerWidth = width - 50;

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: ScreenOne,
    navigationOptions: () => ({
      header: null
    }),
  },
  SubHome: {
    screen: ScreenTwo,
    navigationOptions: () => ({
      header: null
    }),
  },
});

const AboutStackNavigator = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
});


export const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeStackNavigator: {
      screen: HomeStackNavigator,
      navigationOptions: ({ navigation }) => ({
        drawerLockMode:
          navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
        title: `Home`,
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      }),
    },
    AboutStackNavigator: {
      screen: AboutStackNavigator,
      navigationOptions: ({ navigation }) => ({
        drawerLockMode:
          navigation.state.index > 0 ? 'locked-closed' : 'unlocked',
        title: `About`,
        drawerIcon: ({ tintColor }) => (
          <Icon name="user-circle" size={25} color={tintColor} />
        ),
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        drawerIcon: ({ tintColor }) => (
          <Icon name="cog" size={25} color={tintColor} />
        ),
      }),
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // eslint-disable-next-line object-shorthand
    drawerWidth: drawerWidth,
    contentOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.gray1,
      activeBackgroundColor: colors.bluish,
      inactiveBackgroundColor: colors.white,
      itemStyle: {
        height: 40,
        border: 60,
      },
      activeLabelStyle: {
        fontSize: 20,
        fontWeight: 'normal',
      },
      inactiveLabelStyle: {
        fontSize: 20,
        fontWeight: 'normal',
      },
    },
  },
);
