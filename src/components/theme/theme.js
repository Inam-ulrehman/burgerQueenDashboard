import { createTheme } from '@mui/material'
export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00b4d8',
    },
    secondary: {
      main: '#00b4d8',
    },
    background: {
      default: '#f5ebdc',
      paper: '#f5ebdc',
    },
  },
  typography: {
    // fontFamily: 'Domine',
  },

  // ==========Overrides============
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#cb8a26',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  components: {
    // Name of the component  ========     Button
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },

    // Name of the component  ========     Grid
    MuiGrid: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          margin: '0',
        },
      },
    },
  },
})
