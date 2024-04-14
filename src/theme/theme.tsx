import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    primary: {
      main: '#18BEC2', 
    },
    secondary: {
      main: '#008080', 
    },
    error: {
      main: '#d40032', 
    },
    success: {
      main: '#02c06d', 
    },
    info: {
      main: '#004040', 
    },
    warning: {
      main: '#ff452c', 
    },

  },
  typography: {
    fontFamily: 'Rubik, sans-serif', 
  },
});

function App() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>;
}
;

type Props = {  
  children: React.ReactNode;
};

export default function Theme ({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};


 