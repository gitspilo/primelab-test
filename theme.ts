import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#885FFF',
    },
    secondary: {
      main: '#33373B',
    },
    error: {
      main: red.A400,
    },
  },
});