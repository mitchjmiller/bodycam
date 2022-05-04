import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './navigators/MainNavigator';
import LoginOrSignUpNavigator from './navigators/LoginOrSignUpNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <PaperProvider>
        <NavigationContainer>

          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUpNavigator} />
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>

        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
