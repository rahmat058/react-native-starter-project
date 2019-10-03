/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = props => {
  const state = logInScreenHooks(props);

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        label="Email"
        value={state.text}
        type="outlined"
        onChangeText={text => state.setEmail({ text })}
      />
      <View>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </View>
    </View>
  );
};

const logInScreenHooks = props => {
  const [email, setEmail] = useState('');

  return {
    email,
    setEmail,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
