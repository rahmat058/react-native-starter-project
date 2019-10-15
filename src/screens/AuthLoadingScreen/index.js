import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const AuthLoadingScreen = props => {
  const loadApp = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');

      const screen = value === 'token123' ? 'App' : 'Auth';
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
