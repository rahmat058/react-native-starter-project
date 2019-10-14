import { StyleSheet, StatusBar, Platform } from 'react-native';

import colors from './colors';

// eslint-disable-next-line no-undef
export default CommonStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
  },
});
