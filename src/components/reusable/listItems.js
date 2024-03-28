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
import { useNavigate } from 'react-router';

export function MainListItems({ item }) {
  const navigate = useNavigate();

  if (item === 'Карты') return <ListItemButton onClick={() => navigate("/map")}>
    <ListItemIcon>
      <ExploreIcon />
    </ListItemIcon>
    <ListItemText primary="Карты" />
  </ListItemButton>
  else if (item === 'Объекты') return <ListItemButton onClick={() => navigate("/#")}>
    <ListItemIcon>
      <TrafficIcon />
    </ListItemIcon>
    <ListItemText primary="Объекты" />
  </ListItemButton>
  else if (item === 'Поставщики') return <ListItemButton onClick={() => navigate("/#")}>
    <ListItemIcon>
      <PeopleIcon />
    </ListItemIcon>
    <ListItemText primary="Поставщики" />
  </ListItemButton>
  else if (item === 'Аналитика') return <ListItemButton onClick={() => navigate("/#")}>
    <ListItemIcon>
      <BarChartIcon />
    </ListItemIcon>
    <ListItemText primary="Аналитика" />
  </ListItemButton>
  else if (item === 'Профиль') return <ListItemButton onClick={() => navigate("/profile")}>
    <ListItemIcon>
      <img src={profileCircle}></img>
    </ListItemIcon>
    <ListItemText primary="Профиль" />
  </ListItemButton>
}

export function getSecondaryListItems() {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        {/* Saved reports */}
      </ListSubheader>
      {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton> */}
      {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton> */}
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppIcon color='error' />
        </ListItemIcon>
        <ListItemText primary="Выход" />
      </ListItemButton>
    </React.Fragment>
  )
}