import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    textPrimary: '#333333',
    textSecondary: '#7B7B7B',
    link: '#387DDE',
    placeHolder: '#A0A0A0',
    buttonPrimary: '#7F6FFF',
    background: '#F5F7FB',
    nav: '#FFFFFF',
  },
};

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeWrapper;
