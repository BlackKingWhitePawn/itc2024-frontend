import * as React from 'react';
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
import profileCircle from "../../assets/icons/profile-circle.svg";
import TrafficIcon from '@mui/icons-material/Traffic';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExploreIcon from '@mui/icons-material/Explore';
import { useNavigate } from 'react-router-dom';




export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Карта"/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TrafficIcon />
      </ListItemIcon>
      <ListItemText primary="Объекты" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Поставщики" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Аналитика" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src={profileCircle}></img>
      </ListItemIcon>
      <ListItemText primary="Профиль" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <ExitToAppIcon color='error'/>
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  </React.Fragment>
);
