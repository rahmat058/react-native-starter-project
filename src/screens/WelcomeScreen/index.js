import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, BackHandler, Alert } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { Colors, Typography } from 'react-native-ui-lib';
import SplashScreen from 'react-native-splash-screen';


import Container from '../HOC/Container';
import CommonStyles from '../../styles/common';

const Me = require('../../../assets/images/me-at-office.json');

const WelcomeScreen = props => {
  welcomeScreenHooks(props);

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
            Welcome
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
            Please login or sign up to continue using {'\n'} our app.
          </Text>
        </View>

        <View style={styles.lottieViewWrapper}>
          <LottieView source={Me} autoPlay loop />
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

        <View style={styles.bottomSection}>
          <View style={{ marginVertical: 15 }}>
            <Button
              contentStyle={{
                paddingVertical: 10,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate('SignUpScreen')}
            >
              <Text
                style={[
                  Typography.rubik24Bold,
                  {
                    color: Colors.white,
                  },
                ]}
              >
                Sign up
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
              You already have an account?
              <Text
                style={{ color: Colors.primary }}
                onPress={() => props.navigation.navigate('LoginScreen')}
              > Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

const welcomeScreenHooks = (props) => {
  const screen = props.navigation.state.routeName;
  console.log('screen', screen);

  const handleBackButtonClick = () => {
    if (screen === 'WelcomeScreen') {
      Alert.alert(
        'Exit App',
        'Exiting the application?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     )
    }
   return true;
  }

  useEffect(() => {
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, [])
}

const styles = StyleSheet.create({
  welcomeTopWrapper: {
    marginTop: 35,
  },
  lottieViewWrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentLogoWrapper: {
    flex: 0.5,
  },
  socialLogoSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default WelcomeScreen;
