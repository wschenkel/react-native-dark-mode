import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Home from './src/pages/Home';
import Themes from './src/theme';

export default function App() {
  // dark, light, null
  const deviceTheme = useColorScheme();
  const theme = Themes[deviceTheme] || theme.dark

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
