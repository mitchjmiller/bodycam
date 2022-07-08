import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import color from 'color';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';


const primary = '#FF00C8';
const accent = '#F38EFF';

export const DefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary,
    accent,
    text: color('#000000').alpha(0.75).rgb().string(),
    onSurface: '#413F42',
    background: '#FFF0F0',
    notification: '#EEEEEE'
  }
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary,
    accent,
    text: color('#FFFFFF').alpha(0.75).rgb().string(),
    onSurface: '#F9F3EE',
    notification: '#EEEEEE'
  }
};
