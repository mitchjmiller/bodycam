import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function LoginOrSignUpNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: Header }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
    </Stack.Navigator>
  );
}
