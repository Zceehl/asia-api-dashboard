// frontend/src/App.jsx
import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#90caf9' : '#1976d2',
            light: mode === 'dark' ? '#e3f2fd' : '#42a5f5',
            dark: mode === 'dark' ? '#42a5f5' : '#1565c0',
            contrastText: '#ffffff'
          },
          secondary: {
            main: mode === 'dark' ? '#f48fb1' : '#dc004e',
            light: mode === 'dark' ? '#fce4ec' : '#ff4081',
            dark: mode === 'dark' ? '#f06292' : '#c51162',
            contrastText: '#ffffff'
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#f5f5f5',
            paper: mode === 'dark' ? '#1e1e1e' : '#ffffff'
          },
          text: {
            primary: mode === 'dark' ? '#ffffff' : '#2c3e50',
            secondary: mode === 'dark' ? '#b0bec5' : '#546e7a'
          },
          divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h5: {
            fontWeight: 600,
            fontSize: '1.5rem',
            letterSpacing: '0.5px'
          },
          h6: {
            fontWeight: 600,
            fontSize: '1.25rem',
            letterSpacing: '0.25px'
          },
          subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.15px'
          },
          body1: {
            fontSize: '0.875rem',
            letterSpacing: '0.15px'
          }
        },
        shape: {
          borderRadius: 8
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                fontWeight: 500,
                padding: '8px 16px'
              }
            }
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                backgroundImage: 'none'
              }
            }
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                backgroundImage: 'none'
              }
            }
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: 'none'
              }
            }
          }
        }
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Dashboard mode={mode} onModeChange={toggleColorMode} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;