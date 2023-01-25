import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#b39ddb',
      },
      secondary: {
        main: '#fff59d',
      },
    },
  });
export default function nav() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Button href="/" variant="h6" color="inherit" noWrap>
              Home
            </Button>
            <Button href="/loginpage" variant="h6" color="inherit" noWrap>
              Log In
            </Button>
            <Button href="/signup" variant="h6" color="inherit" noWrap>
              Sign up
            </Button>
            <Button  href='/checkout' variant="h6" color="inherit" noWrap>
              Cart
            </Button>
          </Toolbar>
        </AppBar>
        </ThemeProvider>)}