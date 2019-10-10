import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Typography, Colors } from 'react-native-ui-lib';

import { Icon } from '../../utils/fonttello/setFonttelloIcon';

const AboutScreen = props => {
  const state = aboutScreenHooks(props);

  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon={state.barIcon} onPress={state.toggleDrawer} />
        <Appbar.Content title="About" />
      </Appbar.Header>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={[
            Typography.h1,
            {
              color: Colors.gray3,
            },
          ]}
        >
          About Screen
        </Text>
      </View>
    </>
  );
};

const aboutScreenHooks = props => {
  const barIcon = () => <Icon name="bars" size={25} color={Colors.white} />;

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return {
    barIcon,
    toggleDrawer,
  };
};

export default AboutScreen;
