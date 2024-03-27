import MapComponent from "../components/Map/Map";
import MapSidebar from "../components/Map-Sidebar/Map-Sidebar";
import { useState } from "react";

function MapPage() {

  const markers = [
    { id: 1, lat: 58.009473, lng: 56.227455 },
    { id: 2, lat: 58.009433, lng: 56.227495 }
  ]

  const [marker, setMarker] = useState(-1);

    return (
      <div>
        <MapSidebar markers={markers} marker={marker}/>
        <MapComponent markers={markers} currMarker={marker} setMarker={setMarker} />
      </div>
    );
  }

export default MapPage;