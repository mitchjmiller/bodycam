import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import Styles from '../styles/Styles';

export default function ProfileScreen() {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text>This is the Profile screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent: 'center'
  }
});