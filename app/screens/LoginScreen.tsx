import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Button, Text, TextInput, View, StyleSheet
} from 'react-native';

import Styles from '../styles/Styles';

type Props = {
  navigation: NativeStackNavigationProp<any, any>
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Email</Text>
      <TextInput
        style={Styles.textInput}
        keyboardType="email-address"
      />

      <Text style={Styles.label}>Password</Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry
      />

      <Button
        title="Login"
        onPress={() => navigation.replace('Main', { screen: 'Record' })}
      />

      <Text style={styles.orText}>OR</Text>

      <Button
        title="Create Account"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orText: {
    alignSelf: 'center',
    margin: 24
  }
});
