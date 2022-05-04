import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Styles from '../styles/Styles';

type Props = {
  navigation: NativeStackNavigationProp<any, any>
};

export default function SignUpScreen({navigation}: Props) {
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.spacing}
        dense
        autoComplete={false}
        label="E-mail"
        mode="outlined"
      />

      <TextInput 
        style={Styles.spacing}
        dense
        autoComplete={false}
        label="First Name"
        mode="outlined"
      />

      <TextInput 
        style={Styles.spacing}
        dense
        autoComplete={false}
        label="Last Name"
        mode="outlined"
      />

      <TextInput 
        style={Styles.spacing}
        dense
        autoComplete={false}
        secureTextEntry 
        label="Password"
        mode="outlined"
      />

      <TextInput 
        style={Styles.spacing}
        dense
        autoComplete={false}
        secureTextEntry 
        label="Confirm Password"
        mode="outlined"
      />

      <Button mode="contained" onPress={() => navigation.replace('Main', { screen: 'Record' })}>Create Account</Button>
    </View>
  );
}
