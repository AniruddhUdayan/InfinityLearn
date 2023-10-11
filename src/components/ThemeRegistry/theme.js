import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#007BFF',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
      contrastText: '#007BFF',
      dark: '#EFEFEF',
      light: '#FDFDFD',
    },
    yellow: {
      main: '#FCDE5A',
      contrastText: '#000',
      dark: '#F9C700',
      light: '#FDF1A0',
    },
    black: {
      main: '#080E14',
      contrastText: '#fff',
      dark: '#000',
      light: '#1E293B',
    },
    lightBlue : {
      main: '#D4E9FF',
      contrastText: '#007BFF',
      dark: '#B9DFFF',
      light: '#E0F2FF',
    }
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
        root: ({ ownerState, theme }) => ({
          ...(ownerState.themeColor === 'yellow' && {
            backgroundColor: theme.palette.white.main,
            color: theme.palette.yellow.contrastText,
            '&.Mui-selected': {
              // backgroundColor: theme.palette.yellow.main,
              color: theme.palette.yellow.contrastText,
            }
          }),
          borderRadius: '9999px',
          textTransform: 'none',
          fontSize: '1rem',
        })
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.themeColor === 'yellow' && {
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.yellow.main,
              zIndex: 0,
              height: '100%',
              borderRadius: '9999px',
              mixBlendMode: 'multiply',
            },
            '& .MuiTabs-flexContainer': {
              gap: '1rem',
              overflow: 'auto',
              scrollbarWidth: 'none',
            },
            '& .MuiTabs-fixed':{
              overflow: 'auto',
              scrollbarWidth: 'none',
            }
          }),
          [theme.breakpoints.down('lg')]: {
            '& .MuiTabs-flexContainer': {
              justifyContent: 'flex-start!important',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
            }
          }
        }),
      }
    },
  },
});

export default theme;