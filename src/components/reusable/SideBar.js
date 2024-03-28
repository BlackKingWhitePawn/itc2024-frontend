import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../../styles/SideBar.css";
import logoITS from "../../assets/icons/logoITS.svg"

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



export const SideBar = () => {
  const [choosenPage, setChoosen] = useState();
  
  let navigate = useNavigate();
  function handleLogout() {
    navigate('/login');
  }
  function handleMainPage() {
    navigate('/');
  }

  return (
    <div className='sidePannel'>
      <div className="insidePanel">
            <div>
                <img src={logoITS} className='logo' style={{alignSelf:"start"}}/>
            </div>
            <div className='sideTopics'>
              <ExploreIcon/>
              <BarChartIcon/>
              <PeopleIcon/>
              <profileCircle/>
            </div>
            <ExitToAppIcon color="error" style={{alignSelf:"end"}}/>
            </div>
        </div>
  );
};
