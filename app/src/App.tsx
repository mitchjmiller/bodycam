import React from 'react';
import axios from 'axios';
import Constants from 'expo-constants';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

import Styles from './styles/Styles';
import { DefaultTheme, DarkTheme } from './styles/Theme';
import { MainNavigator } from './navigation/Main.navigator';
import { LoginOrSignUpNavigator } from './navigation/LoginOrSignUp.navigator';
import { Snack } from './components/Snack';

const host = Constants.manifest?.extra?.host;
console.log(`Setting default API host to '${host}'`);
axios.defaults.baseURL = host;

const Stack = createNativeStackNavigator();

export default function App() {
  const darkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={darkMode ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={Styles.flexOne}>

        <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
          <StatusBar translucent={false} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUpNavigator} />
            <Stack.Screen name="Main" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>

        <Snack />
      </SafeAreaView>
    </PaperProvider>
  );
}
registerRootComponent(App);
