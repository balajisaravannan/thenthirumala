import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d4ed8', 
    },
    secondary: {
      main: '#9333ea', 
    },
  },
  typography: {
   fontFamily: '"Noto Sans", sans-serif',
   fontFamily: '"Noto Sans Tamil", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.15rem',
      fontWeight: 400,
    },
     h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '0.85rem',
      fontWeight: 500,
    },
    h6: {
     fontSize:'0.75rem',
     fontWeight: 500,
    },
    h7: {
     fontSize: '0.65rem',
     fontWeight: 500,
    },
  },    
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', 
          textTransform: 'none', 
        },
      },
    },
  },
});

export default theme;
