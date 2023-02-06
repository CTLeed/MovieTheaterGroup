import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f3e3d',
      light: '#ffffff',
      dark: '#ccc9bd',
      contrastText: '#8889f7',
    },
    secondary: {
      main: '#ffbd2d',
      light: '#f9ce72',
      dark: '#906f13',
    },
    background: {
      paper: '#fffcf0',
      default: '#282c34',
    },
    text: {
      primary: '#ffcdd2',
    },
    error: {
      main: '#f55144',
    },
  },
});