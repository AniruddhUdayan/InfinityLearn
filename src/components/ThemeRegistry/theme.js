import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007BFF',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
      contrastText: '#007BFF',
    },
    yellow: {
      main: '#FCDE5A',
      contrastText: '#000'
    },
    black: {
      main: '#080E14'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontSize: '1rem',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
  },
});

export default theme;