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
  splash: '/img/splash.png',
  applogo: '/svg/appLogo.svg',
  logo: '/svg/logo.svg',
  near: '/svg/near.svg',
  notification: '/svg/notification.svg',
  settings: '/svg/settings.svg',
  avatar1: '/svg/avatar1.svg',
  avatar2: '/svg/avatar2.svg',
  avatar3: '/svg/avatar3.svg',
  flower: '/svg/flower.svg',
  square: '/svg/square.svg',
  rectangle: '/svg/rectangle.svg',
  home: '/svg/home.svg',
  backArrow: '/svg/backArrow.svg',
};