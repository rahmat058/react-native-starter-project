/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const AuthLoadingScreen = props => {
  const loadApp = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo');
      let userInfo = JSON.parse(value);

      const screen = userInfo.token !== '' ? 'App' : 'Auth';
      props.navigation.navigate(screen);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadApp();
  }, []);

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
