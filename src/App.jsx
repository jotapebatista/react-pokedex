import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Container } from '@mui/material';
import PokemonFetcher from './components/pokemonFetcher';
import Header from './components/Header';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b6b',
      light: '#ff8e8e',
      dark: '#e55555',
    },
    secondary: {
      main: '#4ecdc4',
      light: '#6ed5ce',
      dark: '#3db8b0',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.25rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:768px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width:480px)': {
        fontSize: '1.125rem',
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:1200px)': {
            maxWidth: '100%',
          },
          '@media (min-width:600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          maxWidth: '100vw',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            pointerEvents: 'none',
          },
        }}
      >
        <Header />
        <Container 
          maxWidth={false} 
          sx={{ 
            flex: 1,
            py: { xs: 1, sm: 2, md: 3 }, 
            px: { xs: 0.5, sm: 1, md: 2 },
            position: 'relative', 
            zIndex: 1,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <PokemonFetcher />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
