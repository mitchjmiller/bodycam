import React from 'react';

import { SafeAreaView, StyleSheet, StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DefaultTheme, DarkTheme } from './styles/Theme';
import MainNavigator from './navigators/MainNavigator';
import LoginOrSignUpNavigator from './navigators/LoginOrSignUpNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const darkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={darkMode ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={styles.appContainer}>

        <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
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
