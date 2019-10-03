import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RootAppNavigator } from '../navigators';

const AppView = () => {
  return (
    <View style={styles.container}>
      <RootAppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default AppView;
