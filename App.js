import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';

import { store, persistor } from './src/store';

import AppView from './src/screens/AppView';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.primaryLight,
  },
  roundness: 10,
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
      >
        <PaperProvider theme={theme}>
          <AppView />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

