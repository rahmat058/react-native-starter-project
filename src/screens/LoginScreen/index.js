import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, BackHandler } from 'react-native';
import { Button, Surface, TextInput } from 'react-native-paper';
import { Colors, Typography } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-community/async-storage';

import Container from '../HOC/Container';
import CommonStyles from '../../styles/common';

const LoginScreen = props => {
  const state = signUpInScreenHooks(props);

  return (
    <Container>
      <View style={CommonStyles.wrapper}>
        <View style={styles.welcomeTopWrapper}>
          <Text
            style={[
              Typography.title,
              {
                color: Colors.primary,
              },
            ]}
          >
            Login Now
          </Text>
          <Text
            style={[
              Typography.p,
              {
                color: Colors.text,
                marginTop: 20,
              },
            ]}
          >
            Please login to continue using our app.
          </Text>
        </View>
        <View style={styles.contentLogoWrapper}>
          <Text
            style={[
              Typography.rubik18,
              {
                color: Colors.primary,
                marginTop: 20,
                textAlign: 'center',
              },
            ]}
          >
            Enter via Social Networks
          </Text>

          <View style={styles.socialLogoSection}>
            <Surface style={styles.surface}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../../../assets/images/facebook.png')}
              />
            </Surface>
            <Surface style={styles.surface}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../../../assets/images/twitter.png')}
              />
            </Surface>
          </View>

          <Text
            style={[
              Typography.rubik16,
              {
                color: Colors.text,
                marginTop: 20,
                textAlign: 'center',
              },
            ]}
          >
            or login with {'\n'} enail
          </Text>
        </View>

        <View style={styles.formWrapper}>
          <TextInput
            label="Email"
            value={state.email}
            type="text"
            mode="outlined"
            onChangeText={text => state.setEmail({ text })}
          />
          <TextInput
            label="Password"
            value={state.password}
            type="text"
            mode="outlined"
            onChangeText={text => state.setPassword({ text })}
            style={{ marginTop: 10, borderColor: Colors.gray4 }}
          />
          <View style={styles.forgotSection}>
            <Text
              style={[
                Typography.h4,
                {
                  color: Colors.text,
                  top: 5,
                },
              ]}
            >
              Forgot password?
            </Text>
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={{ marginVertical: 15 }}>
            <Button
              contentStyle={{
                paddingVertical: 10,
              }}
              mode="contained"
              onPress={state.login}
            >
              <Text
                style={[
                  Typography.rubik24Bold,
                  {
                    color: Colors.white,
                  },
                ]}
              >
                Login
              </Text>
            </Button>

            <Text
              style={[
                Typography.rubik16,
                {
                  color: Colors.text,
                  marginTop: 20,
                },
              ]}
            >
              Don't have an account?
              <Text
                style={{ color: Colors.primary }}
                onPress={() => props.navigation.navigate('SignUpScreen')}
              > Sign up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

const signUpInScreenHooks = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBackButtonClick = () => {
    props.navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  const login = async () => {
    await AsyncStorage.setItem('userToken', 'token123');
    const success = props.navigation.navigate('SuccessScreen');

    if (success) {
      setTimeout(() => {
        props.navigation.navigate('App');
      }, 3000);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
  };
};

const styles = StyleSheet.create({
  welcomeTopWrapper: {
    marginTop: 35,
  },
  contentLogoWrapper: {
    flex: 1,
  },
  socialLogoSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomSection: {
    marginBottom: 15,
  },
  surface: {
    padding: 10,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  forgotSection: {
    alignItems: 'flex-end',
  },
});

export default LoginScreen;
