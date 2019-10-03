import React from 'react';
import { Provider } from 'react-redux';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';

import { store, persistor } from './src/store';

import AppView from './src/screens/AppView';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.container}>
            <ActivityIndicator color={colors.red} />
          </View>
        }
        persistor={persistor}
      >
        <AppView />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
