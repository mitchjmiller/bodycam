import React from 'react';
import { Button, Text, TextInput , View } from 'react-native';

import Styles from '../Styles';

export default function SignUp(){
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>First Name</Text>
      <TextInput style={Styles.textInput}></TextInput >

      <Text style={Styles.label}>Last Name</Text>
      <TextInput style={Styles.textInput}></TextInput >

      <Text style={Styles.label}>Email</Text>
      <TextInput style={Styles.textInput}></TextInput >

      <Text style={Styles.label}>Password</Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry={true}
      ></TextInput >

      <Text style={Styles.label}>Confirm Password</Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry={true}
      ></TextInput >

      <Button
        title={'Create Account'}
      ></Button>
    </View>
  );
}