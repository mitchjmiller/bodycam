import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

import Styles from '../Styles';

export default function Login({navigation}){
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Email</Text>
      <TextInput
        style={Styles.textInput}
        keyboardType='email-address'
      >
      </TextInput>

      <Text style={Styles.label}>Password</Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry={true}
      ></TextInput >

      <Button
        title={'Login'}
        onPress={() => navigation.navigate('Record')}
      ></Button>

      <Text style={styles.orText}>OR</Text>

      <Button
        title={'Create Account'}
        onPress={() => navigation.navigate('Sign Up')}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  orText:{
    alignSelf: 'center',
    margin: 24
  }
});