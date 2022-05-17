import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import Styles from '../styles/Styles';

export default function AddContactsScreen() {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text>This be the Add Contacts screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent: 'center'
  }
});