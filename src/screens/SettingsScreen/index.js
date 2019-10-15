import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Typography, Colors } from 'react-native-ui-lib';

import { Icon } from '../../utils/fonttello/setFonttelloIcon';
import Container from '../HOC/Container';

const SettingsScreen = props => {
  const state = screenOneHooks(props);

  return (
    <Container>
      <Appbar.Header>
        <Appbar.Action icon={state.barIcon} onPress={state.toggleDrawer} />
        <Appbar.Content title="Settings" color={Colors.white} />
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
          Settings Screen
        </Text>
      </View>
    </Container>
  );
};

const screenOneHooks = props => {
  const barIcon = () => <Icon name="bars" size={25} color={Colors.white} />;

  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return {
    barIcon,
    toggleDrawer,
  };
};

export default SettingsScreen;
