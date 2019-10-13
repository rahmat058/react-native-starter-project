import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const appLogo = require('../../../assets/images/app-logo.png');

const { height } = Dimensions.get('window');

const SplashScreen = props => {
  const state = splashScreenHooks(props);

  return (
    <>
      <View style={styles.container}>
        <Animated.Image
          source={appLogo}
          style={{ ...styles.logo, opacity: state.logoOpacity }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const splashScreenHooks = props => {
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const [titleMarginTop, setTitleMarginTop] = useState(
    new Animated.Value(height / 2),
  );

  useEffect(() => {
    Animated.sequence([
      // animation by sequence
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
      }),
      // animate text
      Animated.timing(titleMarginTop, {
        toValue: 10,
        duration: 1000,
      }),
    ]).start(() => {
      props.navigation.navigate('WelcomeScreen');
    });
  }, []);

  return {
    logoOpacity,
    setLogoOpacity,
    titleMarginTop,
    setTitleMarginTop,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: 80,
    height: 80,
  },
});

export default SplashScreen;
