import MapComponent from "../components/Map/Map";
import NavSidebar from "../components/Nav-Sidebar/Nav-Sidebar";
import { useMemo, useState } from "react";
import './map-page.scss'
import user from '../assets/icons/user.svg'
import MainSidebar from "../components/Main-Sidebar/Main-Sidebar";
import { Fab } from "@mui/material";
import { AccountCircle, AccountCircleOutlined, BarChartRounded, CloseOutlined, CloseRounded } from "@mui/icons-material";
import ChartPopup from "../components/chart-popup";
import { useNavigate } from "react-router";

import data from '../data/mock-its.json';

function MapPage() {
  const [isOpened, setIsOpened] = useState(false);
  const navigation = useNavigate()

  const markers = [
    { id: 1, lat: 58.009473, lng: 56.227455 },
    { id: 2, lat: 58.009433, lng: 56.227495 }
  ]

  const [marker, setMarker] = useState(-1);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);

  const [catChosen, setCatChosen] = useState(1);


  const [objType, setObjType] = useState("Видео")

  const newData = useMemo(() => data.filter((obj) => obj["object_type"] == objType), [objType]);
  console.log(newData);

  return (
    <div>
      <NavSidebar chosen={catChosen} setChosen={setCatChosen} open={mainSidebarOpen} setOpen={setMainSidebarOpen} />
      <MainSidebar category={catChosen} open={mainSidebarOpen} objType={objType} setObjType={setObjType} />
      <MapComponent markers={newData} currMarker={marker} setMarker={setMarker} />
      <div className='button-container'>
        <Fab onClick={() => navigation('/profile')}>
          <AccountCircle />
        </Fab>
        <Fab onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <CloseRounded /> : <BarChartRounded />}
        </Fab>
      </div>
      <div className="bottom-popup-container">
        <ChartPopup isOpened={isOpened} setIsOpened={setIsOpened} isCollapsed={mainSidebarOpen} />
      </div>
    </div>
  );
}

export default MapPage;