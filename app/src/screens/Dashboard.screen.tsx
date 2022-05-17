import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import Styles from '../styles/Styles';

export default function LibraryScreen() {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text>{'Dashboard'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent: 'center'
  }
});