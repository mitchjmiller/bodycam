import React from 'react';
import {
  Button, Text, TextInput, View
} from 'react-native';

import Styles from '../styles/Styles';

export default function SignUpScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Email</Text>
      <TextInput style={Styles.textInput} />

      <Text style={Styles.label}>First Name</Text>
      <TextInput style={Styles.textInput} />

      <Text style={Styles.label}>Last Name</Text>
      <TextInput style={Styles.textInput} />

      <Text style={Styles.label}>Password</Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry
      />

      <Text style={Styles.label}>Confirm Password</Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry
      />

      <Button
        title="Create Account"
      />
    </View>
  );
}
