import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Success = require('../../../assets/images/success.json');

const SuccessScreen = props => {
  successScreenScreenHooks(props);

  return (
    <View style={styles.container}>
      <LottieView source={Success} autoPlay loop />
    </View>
  )

};

const successScreenScreenHooks = props => {
  useEffect(() => {
    props.navigation.navigate('App');
  }, []);
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SuccessScreen;
