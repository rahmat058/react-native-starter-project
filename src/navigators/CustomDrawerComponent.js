import React from 'react';
import { View } from 'react-native';
import { DrawerNavigatorItems  } from 'react-navigation-drawer';

const customDrawerContentComponent = props => {
  customDrawerContentComponentHooks(props);

  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  );
};

const customDrawerContentComponentHooks = props => {
  console.log('props: ', props);
};

export default customDrawerContentComponent;
