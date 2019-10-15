import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { Typography, Colors } from 'react-native-ui-lib';

import { Icon } from '../../utils/fonttello/setFonttelloIcon';
import Container from '../HOC/Container';

const ScreenOne = props => {
  const state = screenOneHooks(props);

  return (
    <Container>
      <Appbar.Header>
        <Appbar.Action icon={state.barIcon} onPress={state.toggleDrawer} />
        <Appbar.Content title="Home" color={Colors.white} />
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
          Home Screen
        </Text>

        <View style={{ marginVertical: 15 }}>
          <Button
            style={{
              paddingVertical: 10,
            }}
            mode="contained"
            onPress={() => props.navigation.navigate('SubHome')}
          >
            <Text
              style={[
                Typography.rubik24Bold,
                {
                  color: Colors.white,
                },
              ]}
            >
              Next
            </Text>
          </Button>
        </View>
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

export default ScreenOne;
