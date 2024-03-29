import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './reusable/listItems';
import { ProfileEdit } from './ProfileEdit';
import { ProfileCard } from './ProfileCard';
import logotip from "../assets/icons/logotip.svg"
import Layout from './layout'
import { useNavigate } from 'react-router-dom';


export default function ProfileComponents() {
  const pageName = "Профиль"
  return (
    <Layout pageName={pageName}>
        <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper style={{borderRadius:"10px", boxShadow:"4px 8px 8px rgba(0,0,0,0.12)"}}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: "max-height",
          }}
        >
          <ProfileCard></ProfileCard>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper style={{borderRadius:"10px", boxShadow:"4px 8px 8px rgba(0,0,0,0.12)"}}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 'max-height',
          }}
        >
          <ProfileEdit></ProfileEdit>
        </Paper>
      </Grid>
      </Grid>
    </Layout>
  );
}


