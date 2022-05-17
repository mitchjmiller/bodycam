import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

const primary = '#D06224';
const accent = '#AE431E';
const onSurface = '#413F42';
const background = '#F9F3EE';

export const DefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary,
    accent,
    onSurface,
    background,
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
    onSurface,
    notification: '#EEEEEE'
  }
};
