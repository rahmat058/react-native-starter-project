import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Colors } from 'react-native-ui-lib';

const { height } = Dimensions.get('window');

const Container = props => {
  const state = containerHooks(props);

  const scrollEnabled = state.screenHeight > height;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='rgba(117,124,251,.8)' />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollview}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={(contentWidth, contentHeight) => state.setScreenHeight(contentHeight)}
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

const containerHooks = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  return {
    screenHeight,
    setScreenHeight,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  },
});

export default Container;
