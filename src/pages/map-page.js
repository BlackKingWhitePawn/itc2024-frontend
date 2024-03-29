import MapComponent from "../components/Map/Map";
import NavSidebar from "../components/Nav-Sidebar/Nav-Sidebar";
import { useEffect, useMemo, useState } from "react";
import './map-page.scss'
import user from '../assets/icons/user.svg'
import MainSidebar from "../components/Main-Sidebar/Main-Sidebar";
import { Fab } from "@mui/material";
import { AccountCircle, AccountCircleOutlined, BarChartRounded, CloseOutlined, CloseRounded } from "@mui/icons-material";
import ChartPopup from "../components/chart-popup";
import { useNavigate } from "react-router";

import SecondSidebar from "../components/Second-Sidebar/Second-Sidebar";
import mockData from '../data/mock-its';

function MapPage() {
  const [data, setData] = useState(mockData)
  const [isOpened, setIsOpened] = useState(false);
  const [filters, setFilters] = useState({ id: 0, label: "Без фильтра" }); // contains dropdown object
  const navigation = useNavigate()

  const markers = [
    { id: 1, lat: 58.009473, lng: 56.227455 },
    { id: 2, lat: 58.009433, lng: 56.227495 }
  ]

  const [marker, setMarker] = useState(-1);
  const [mainSidebarOpen, setMainSidebarOpen] = useState(false);

  const [catChosen, setCatChosen] = useState(1);


  const [objType, setObjType] = useState("Видео")

  // const newData = useMemo(() => data.filter((obj) => obj["object_type"] == objType), [objType, data]);
  // ? реакт фреймворк для маргиналов блять
  const [newData, setNewData] = useState(data.filter((obj) => obj["object_type"] == objType));

  useEffect(() => {setNewData(data.filter((obj) => obj["object_type"] == objType))}, [objType])

  useEffect(() => {
    if (filters.label == 'Без фильтра') {
      var newData = data;
      for (let i = 0; i < newData.length; i++) {
        newData[i]["color"] = 'neutral'
      }
      setData(newData);
      setNewData(newData.filter((obj) => obj["object_type"] == objType))
    }
    if (filters.label == 'По дате последнего обслуживания') {
      let temp = data.map((obj) => {
        return { [obj["id"]]: obj["history"].sort((a, b) => { return b["created_at"] - a["created_at"] })[0]["created_at"] };
      });
      let maxBound = Math.max(...(temp.flatMap(obj => Object.values(obj))));
      let minBound = Math.min(...(temp.flatMap(obj => Object.values(obj))));
      let diff = maxBound - minBound;
      let threshhold = diff / 3
      var newData = data;
      for (let i = 0; i < newData.length; i++) {
        if (temp[newData[i]["id"]][newData[i]["id"]] <= minBound + threshhold) {
          newData[i]["color"] = 'red'
        } else if (temp[newData[i]["id"]][newData[i]["id"]] <= minBound + 2 * threshhold) {
          newData[i]["color"] = 'yellow'
        } else if (temp[newData[i]["id"]][newData[i]["id"]] <= minBound + 3 * threshhold) {
          newData[i]["color"] = 'green'
        }
      }
      setData(newData);
      setNewData(newData.filter((obj) => obj["object_type"] == objType))
    }
    if (filters.label == 'По рейтингу истории') {
      let temp = new Object;
      data.forEach(obj => {
        let numbers = obj["history"].map(hist => { return hist["score"] });
        temp[obj["id"]] = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length;
      })
      let maxBound = Math.max(...(Object.values(temp)));
      let minBound = Math.min(...(Object.values(temp)));
      let diff = maxBound - minBound;
      let threshhold = diff / 3
      var newData = data;
      for (let i = 0; i < newData.length; i++) {
        if (temp[newData[i]["id"]] <= minBound + threshhold) {
          newData[i]["color"] = 'red'
        } else if (temp[newData[i]["id"]] <= minBound + 2 * threshhold) {
          newData[i]["color"] = 'yellow'
        } else if (temp[newData[i]["id"]] <= minBound + 3 * threshhold) {
          newData[i]["color"] = 'green'
        }
      }
      setData(newData);
      setNewData(newData.filter((obj) => obj["object_type"] == objType))
    }
    if (filters.label == 'По рейтингу предсказания') {
      let temp = new Object;
      data.forEach(obj => {
        temp[obj["id"]] = obj["score"];
      })
      let maxBound = Math.max(...(Object.values(temp)));
      let minBound = Math.min(...(Object.values(temp)));
      let diff = maxBound - minBound;
      let threshhold = diff / 3
      var newData = data;
      for (let i = 0; i < newData.length; i++) {
        if (temp[newData[i]["id"]] <= minBound + threshhold) {
          newData[i]["color"] = 'red'
        } else if (temp[newData[i]["id"]] <= minBound + 2 * threshhold) {
          newData[i]["color"] = 'yellow'
        } else if (temp[newData[i]["id"]] <= minBound + 3 * threshhold) {
          newData[i]["color"] = 'green'
        }
      }
      setData(newData);
      setNewData(newData.filter((obj) => obj["object_type"] == objType))
    }
  }, [filters])

  return (
    <div>
      <NavSidebar chosen={catChosen} setChosen={setCatChosen} open={mainSidebarOpen} setOpen={setMainSidebarOpen} />
      <MainSidebar category={catChosen} open={mainSidebarOpen} objType={objType} setObjType={setObjType} filters={filters} setFilters={setFilters} />
      <MapComponent markers={newData} currMarker={marker} setMarker={setMarker} objType={objType} filters={filters} />
      <div className='button-container'>
        <Fab onClick={() => navigation('/profile')}>
          <AccountCircle />
        </Fab>
        <Fab onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <CloseRounded /> : <BarChartRounded />}
        </Fab>
      </div>
      <div className="bottom-popup-container">
        <ChartPopup
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          isCollapsed={mainSidebarOpen}
          catChosen={catChosen}
          setCatChosen={setCatChosen}
        />
      </div>
      <SecondSidebar data={newData.filter(obj => obj["id"] == marker)[0]}/>
    </div>
  );
}

export default MapPage;