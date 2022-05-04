import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Styles from '../styles/Styles';

type Props = {
  navigation: NativeStackNavigationProp<any, any>
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={Styles.container}>
      <TextInput      
        style={Styles.spacing}
        dense
        autoComplete={false}
        label="E-mail"
        mode="outlined"
        keyboardType="email-address"
      />

      <TextInput
        style={Styles.spacing}
        dense
        autoComplete={false}
        label="Password"
        mode="outlined"
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={() => navigation.replace('Main', { screen: 'Record' })}
      >Login</Button>

      <Text style={styles.orText}>OR</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('SignUp')}
      >Create Account</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  orText: {
    alignSelf: 'center',
    margin: 24
  }
});
