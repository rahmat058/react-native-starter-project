import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { colors, fonts } from './src/styles';

import { store, persistor } from './src/store';

import AppView from './src/screens/AppView';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.primaryLight,
  },
  fonts: {
    ...fonts,
  },
  roundness: 10,
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={(
          <View style={styles.container}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )}
        persistor={persistor}
      >
        <PaperProvider theme={theme}>
          <AppView />
        </PaperProvider>
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
