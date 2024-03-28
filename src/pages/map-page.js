import MapComponent from "../components/Map/Map";
import NavSidebar from "../components/Nav-Sidebar/Nav-Sidebar";
import { useState } from "react";

import '../components/Nav-Sidebar/Nav-Sidebar.scss'
import user from '../assets/icons/user.svg'
import MainSidebar from "../components/Main-Sidebar/Main-Sidebar";
import { Fab } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";

function MapPage() {

  const markers = [
    { id: 1, lat: 58.009473, lng: 56.227455 },
    { id: 2, lat: 58.009433, lng: 56.227495 }
  ]

  const [marker, setMarker] = useState(-1);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);

    return (
      <div>
        <NavSidebar markers={markers} marker={marker} open={mainSidebarOpen} setOpen={setMainSidebarOpen}/>
        <MainSidebar open={mainSidebarOpen}/>
        <MapComponent markers={markers} currMarker={marker} setMarker={setMarker} />
        <div className='user-container'>
          <Fab>
            <AccountCircleOutlined />
          </Fab>
        </div>
      </div>
    );
  }

export default MapPage;