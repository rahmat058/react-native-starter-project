import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Avatar } from 'react-native-paper';
import { Colors, Typography } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-community/async-storage';

import { Icon } from '../utils/fonttello/setFonttelloIcon';

const { height } = Dimensions.get('window');

const customDrawerContentComponent = props => {
  const state = customDrawerContentComponentHooks(props);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: height / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar.Image
          size={120}
          source={require('../../assets/images/pages/profile.png')}
          style={{ backgroundColor: Colors.gray4 }}
        />

        <View style={{marginTop: 15}}>
          <Text
            style={[
              Typography.rubik20Bold,
              {
                color: Colors.gray3,
                textAlign: 'center'
              },
            ]}
          >
            John Doe
          </Text>
          <Text
            style={[
              Typography.rubik18,
              {
                color: Colors.gray3,
              },
            ]}
          >
            johndoe@gmail.com
          </Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <DrawerNavigatorItems {...props} />
      </View>

      <View style={{ marginLeft: 20, marginBottom: 20, flexDirection: 'row' }}>
        <Icon name="sign-out-alt" size={25} color={Colors.red} />
        <Text
          style={{ color: Colors.red, fontSize: 20, paddingLeft: 30 }}
          onPress={state.loginOut}
        >
          Sign Out
        </Text>
      </View>
    </View>
  );
};

const customDrawerContentComponentHooks = props => {  
  const loginOut = async() => {
    await AsyncStorage.clear();
    props.navigation.navigate('LoginScreen');
  }
  
  return {
    loginOut
  }
};

export default customDrawerContentComponent;
