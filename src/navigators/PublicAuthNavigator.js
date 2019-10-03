import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

export const AuthStackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
