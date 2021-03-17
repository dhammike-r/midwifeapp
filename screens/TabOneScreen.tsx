import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Image, TextInput, TouchableOpacity } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MID WIFE</Text>
      <Image style={{ width: 150, height: 150 }} source={require('../assets/images/logo.png')} />
      <Text style={styles.title2}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="numeric"
      />

      <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
        <Text style={[styles.buttonText, styles.buttonRegisterText]}>
          Sign In            
          </Text>
      </TouchableOpacity>
      <Text style={styles.small}>By signing in, you accept our Terms and Conditions</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:40,
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold', paddingBottom: 20,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold', paddingBottom: 5, paddingTop: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold', paddingBottom: 5,
  },
  small: {
    fontSize: 12,
    fontWeight: '300', paddingBottom: 15,
    position: 'absolute',
    bottom: 0,

  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    marginTop: 60,
    backgroundColor: "#2980b9",
    padding: 15,
    borderRadius: 5,
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#2A2AC0",
  },
  buttonRegisterText: {
    color: "#fff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
