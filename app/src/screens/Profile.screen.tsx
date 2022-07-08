import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

import Styles from '../styles/Styles';

type Props = {
  navigation: NativeStackNavigationProp<any, any>
};

export default function ProfileScreen({ navigation }:Props) {

  const [user] = useState(
    { email: 'fake@mail.com', firstName: 'Mitch', lastName: 'Miller', profileImg: '', id: '1111-1111-1111' }
  );

  const logout = () => {
    navigation.replace('LoginOrSignUp');
  };

  return (
    <View style={[Styles.container, styles.container]}>
      {
        user.profileImg
          ? <Avatar.Image size={192} source={{ uri: user.profileImg }} />
          : <Avatar.Text size={192} label={user.firstName[0] + user.lastName[0]} />
      }

      <Button onPress={logout}>Logout</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent: 'center'
  }
});