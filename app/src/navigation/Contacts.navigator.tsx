import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import Header from '../components/Header';
import AddContactScreen from '../screens/AddContact.screen';
import ContactsScreen from '../screens/Contacts.screen';
import Styles from '../styles/Styles';

const Stack = createNativeStackNavigator();

export default function ContactsNavigator() {
  return (
    <View style={Styles.flexOne} collapsable={false}>
      <Stack.Navigator screenOptions={{ header: Header }} >
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} options={{ title: 'Add New Contact' }} />
      </Stack.Navigator>
    </View>
  );
}
