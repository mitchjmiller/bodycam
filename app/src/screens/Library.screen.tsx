import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import Styles from '../styles/Styles';

export default function LibraryScreen() {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text>{'A good ol\' Library screen'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent: 'center'
  }
});
