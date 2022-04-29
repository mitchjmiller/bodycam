import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login.screen';
import SignUp from './screens/SignUp.screen';
import Record from './screens/Record.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.appContainer}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Record" component={Record} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
