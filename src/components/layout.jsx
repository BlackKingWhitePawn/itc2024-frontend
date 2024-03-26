import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import PrimarySearchAppBar from './app-bar';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Layout({ children }) {

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <PrimarySearchAppBar />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3} >
                            <Grid item xs={8}>
                                {children}
                            </Grid>
                            <Grid item xs={8}>
                                {children}
                            </Grid>
                            <Grid item xs={8}>
                                {children}
                            </Grid>
                            <Grid item xs={8}>
                                {children}
                            </Grid>
                            <Grid item xs={8}>
                                {children}
                            </Grid>
                            <Grid item xs={8}>
                                {children}
                            </Grid>
                        </Grid>
                        {/* <Copyright sx={{ pt: 4 }} /> */}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}