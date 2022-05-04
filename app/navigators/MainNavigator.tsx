import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RecordScreen from '../screens/RecordScreen';
import LibraryScreen from '../screens/LibraryScreen';
import AddContactsScreen from '../screens/AddContactsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function getIcon(name: string, color: any, size = 26) {
  return (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator backBehavior="none" labeled={false}>
      <Tab.Screen
        name="Record"
        component={RecordScreen}
        options={{ tabBarIcon: ({ color }) => getIcon('camera-wireless', color) }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{ tabBarIcon: ({ color }) => getIcon('book', color) }}
      />
      <Tab.Screen
        name="AddContacts"
        component={AddContactsScreen}
        options={{ tabBarIcon: ({ color }) => getIcon('account-multiple', color) }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => getIcon('account-circle', color) }}
      />
    </Tab.Navigator>
  );
}
