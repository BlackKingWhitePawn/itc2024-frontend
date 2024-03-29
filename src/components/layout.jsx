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
import { MainListItems, getSecondaryListItems } from './reusable/listItems';
import { ProfileEdit } from './ProfileEdit';
import { ProfileCard } from './ProfileCard';
import logotip from "../assets/icons/logotip.svg"
import { Avatar, Card, CardHeader, CardContent, CircularProgress } from '@mui/material';

import { Breadcrumbs, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import profileCircle from "../assets/icons/profile-circle.svg";
import TrafficIcon from '@mui/icons-material/Traffic';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExploreIcon from '@mui/icons-material/Explore';
import { observer } from 'mobx-react-lite';
import appStore from '../stores/app';

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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Layout = observer(({ children, pageName, loaded = true }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    appStore.toggleSidebar();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={appStore.isSideBarOpened}>
          <Toolbar
            sx={{
              backgroundColor: "#D76223",
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(appStore.isSideBarOpened && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {pageName}
            </Typography>
            {/* <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={appStore.isSideBarOpened}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <img src={logotip} ></img>
            <IconButton onClick={toggleDrawer}>

              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton onClick={() => navigate("/map")}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Карты" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/#")}>
              <ListItemIcon>
                <TrafficIcon />
              </ListItemIcon>
              <ListItemText primary="Объекты" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/accounts")}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Управления" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/analysis")}>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Аналитика" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/profile")}>
              <ListItemIcon>
                <img src={profileCircle}></img>
              </ListItemIcon>
              <ListItemText primary="Профиль" />
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
              <ListSubheader component="div" inset>
              </ListSubheader>
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppIcon color='error' />
                </ListItemIcon>
                <ListItemText primary="Выход" onClick={() => navigate("/login")} />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
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
            {loaded ? children : <Grid width={"100%"} height={"100%"} container justifyContent="center" alignItems="center">
              <CircularProgress />
            </Grid>}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
})

export default Layout