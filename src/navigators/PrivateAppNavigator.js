import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import customDrawerContentComponent from './CustomDrawerComponent';

import ScreenOne from '../screens/HomeScreen/ScreenOne';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: ScreenOne,
    navigationOptions: () => ({
      header: null,
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
        // drawerIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" style={{ fontSize: 24, color: tintColor }} />
        // ),
      }),
    },
    Settings: {
      screen: SettingsScreen,
      // navigationOptions: () => ({
      //   drawerIcon: ({ tintColor }) => (
      //     <Icon
      //       name="ios-settings"
      //       style={{ fontSize: 24, color: tintColor }}
      //     />
      //   ),
      // }),
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: customDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 300,
    contentOptions: {
      activeTintColor: '#16a085',
      inactiveTintColor: '#919191',
      activeBackgroundColor: '#ebebeb',
      inactiveBackgroundColor: '#fff',
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
