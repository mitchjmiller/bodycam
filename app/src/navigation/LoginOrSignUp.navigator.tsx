import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import LoginScreen from '../screens/Login.screen';
import SignUpScreen from '../screens/SignUp.screen';

const Stack = createNativeStackNavigator();

export function LoginOrSignUpNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: Header }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
    </Stack.Navigator>
  );
}
