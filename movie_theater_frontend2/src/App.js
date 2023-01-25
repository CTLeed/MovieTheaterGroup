import './App.css';
import { SeatBooking } from './views/SeatBooking';
import { Paper } from '@mui/material';
import { SeatBooking2 } from './views/SeatBooking2';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { Checkboxes } from './views/Checkboxes';

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ backgroundColor: 'primary' }}>
        <h1 style={{ color: 'red' }}>Avatar</h1>
        <Paper>
          <SeatBooking2 />
        </Paper>
      </div >
    </ThemeProvider>
  );
}

export default App;
