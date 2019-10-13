import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const Home = require('../../../assets/images/home.json');

const LoginScreen = props => {
  const state = logInScreenHooks(props);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView source={Home} autoPlay loop />
      </View>

      <View style={{ flex: 1.5 }}>
        <View>
          <TextInput
            label="Email"
            value={state.email}
            type="text"
            mode="outlined"
            onChangeText={text => state.setEmail({ text })}
          />
          <TextInput
            label="Password"
            value={state.password}
            type="text"
            mode="outlined"
            onChangeText={text => state.setPassword({ text })}
            style={{ marginTop: 10 }}
          />
        </View>
        <View style={{ marginVertical: 15 }}>
          <Button
            style={{
              paddingVertical: 10,
              fontSize: 16,
            }}
            mode="contained"
            onPress={() => props.navigation.navigate('SuccessScreen')}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

const logInScreenHooks = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    email,
    setEmail,
    password,
    setPassword,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
