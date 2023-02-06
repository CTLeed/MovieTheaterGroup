import './App.css';
import { Paper } from '@mui/material';
import { SeatBooking } from './views/SeatBooking';
import { ThemeProvider } from '@mui/material';
import { MovieSelect } from './views/MovieSelect';
import { Route, Routes } from 'react-router-dom';
import { theme } from './static/themeOptions.ts'


// const theme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#3f3e3d',
//       light: '#ffffff',
//       dark: '#ccc9bd',
//       contrastText: '#8889f7',
//     },
//     secondary: {
//       main: '#ffbd2d',
//       light: '#f9ce72',
//       dark: '#906f13',
//     },
//     background: {
//       paper: '#fffcf0',
//       default: '#282c34',
//     },
//     text: {
//       primary: '#ffcdd2',
//     },
//     error: {
//       main: '#f55144',
//     },
//   },
// });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieSelect />} />
        <Route path="/pickseats" element={<SeatBooking />} />
      </Routes>
    </div >
  );
}

export default App;
