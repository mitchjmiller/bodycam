import color from 'color';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

const black = '#000000';
const white = '#ffffff';

export default {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: '#FF5F00',
    accent: '#B20600',
    background: '#EEEEEE',
    surface: white,
    error: '#B00020',
    text: black,
    onSurface: black,
    disabled: color().alpha(0.26).rgb().string(),
    placeholder: color(black).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(),
    notification: '#EEEEEE'
  }
};
