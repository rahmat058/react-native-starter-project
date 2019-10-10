import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Colors } from 'react-native-ui-lib';

import { Icon } from '../utils/fonttello/setFonttelloIcon';

const customDrawerContentComponent = props => {
  customDrawerContentComponentHooks(props);

  return (
    <>
      <View style={{ flex: 1 }}>
        <DrawerNavigatorItems {...props} />
      </View>

      <View style={{ marginLeft: 20, marginBottom: 20, flexDirection: 'row' }}>
        <Icon name="sign-out-alt" size={25} color={Colors.red} />
        <Text
          style={{ color: Colors.red, fontSize: 20, paddingLeft: 30 }}
          onPress={() => props.navigation.navigate('LoginScreen')}
        >
          Sign Out
        </Text>
      </View>
    </>
  );
};

const customDrawerContentComponentHooks = props => {
  console.log('props: ', props);
};

export default customDrawerContentComponent;
