import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RecordScreen from '../screens/RecordScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function getIcon(name: string, color: any, size = 26) {
  return (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Record" component={RecordScreen} options={{ tabBarIcon: ({ color }) => getIcon('camera', color) }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ tabBarIcon: ({ color }) => getIcon('book', color) }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => getIcon('account', color) }} />
    </Tab.Navigator>
  );
}
