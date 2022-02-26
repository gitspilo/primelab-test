import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Manrope"'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#885FFF',
    },
    secondary: {
      main: '#18D7A9',
    },
    error: {
      main: red.A400,
    },
  },
});

export const images = {
  splash: '/assets/splash.png',
  applogo: '/assets/appLogo.svg',
  logo: '/assets/logo.svg',
  near: '/assets/near.svg',
  notification: '/assets/notification.svg',
  settings: '/assets/settings.svg',
  avatar1: '/assets/avatar1.svg',
  avatar2: '/assets/avatar2.svg',
  avatar3: '/assets/avatar3.svg',
  flower: '/assets/flower.svg',
  square: '/assets/square.svg',
  rectangle: '/assets/rectangle.svg',
  home: '/assets/home.svg',
  backArrow: '/assets/backArrow.svg',
};