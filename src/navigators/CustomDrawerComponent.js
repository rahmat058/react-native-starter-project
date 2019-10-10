import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Colors } from 'react-native-ui-lib';

import { Icon } from '../utils/fonttello/setFonttelloIcon';

const customDrawerContentComponent = props => {
  const state = customDrawerContentComponentHooks(props);

  return (
    <>
      <View style={{ flex: 1 }}>
        <DrawerNavigatorItems {...props} />
      </View>

      <View style={{ marginLeft: 20, marginBottom: 20, flexDirection: 'row' }}>
        <Icon name="sign-out-alt" size={25} color={Colors.red} />
        <Text
          style={{ color: Colors.red, fontSize: 20, paddingLeft: 30 }}
          onPress={state.signOut}
        >
          Sign Out
        </Text>
      </View>
    </>
  );
};

const customDrawerContentComponentHooks = props => {
  const signOut = () => {
    props.navigation.navigate('LoginScreen');
  };

  return {
    signOut,
  };
};

export default customDrawerContentComponent;
