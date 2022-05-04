import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';

type Props = {
  navigation: NativeStackNavigationProp<any>,
  route: RouteProp<any>,
  options: any
}

export default function Header({ navigation, route, options }: Props) {
  return (
    <Appbar.Header>
      {navigation.canGoBack() ? (<Appbar.BackAction onPress={navigation.goBack} />) : null}
      <Appbar.Content title={options?.title || route.name} />
    </Appbar.Header>
  );
}
