import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import Styles from '../styles/Styles';

export default function AddContactScreen() {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text>Add a new Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent: 'center'
  }
});