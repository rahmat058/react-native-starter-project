import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import SuccessScreen from '../screens/SuccessScreen';

export const AuthStackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SignUpScreen: {
    screen: SignUpScreen,
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
  SuccessScreen: {
    screen: SuccessScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
