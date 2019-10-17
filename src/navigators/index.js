import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import { AuthStackNavigator } from './PublicAuthNavigator';
import { AppDrawerNavigator } from './PrivateAppNavigator';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppSwitchNavigator = createAnimatedSwitchNavigator(
  {
    AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
  },
  {
    initialRouteName: 'AuthLoadingScreen',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={300}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export const RootAppNavigator = createAppContainer(AppSwitchNavigator);
