import React from 'react';

import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Theme from './styles/Theme';
import MainNavigator from './navigators/MainNavigator';
import LoginOrSignUpNavigator from './navigators/LoginOrSignUpNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <SafeAreaView style={styles.appContainer}>

        <NavigationContainer theme={Theme}>
          <StatusBar translucent={false} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUpNavigator} />
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>

      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
