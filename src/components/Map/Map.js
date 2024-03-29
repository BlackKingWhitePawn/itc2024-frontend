import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, OverlayView, Marker } from '@react-google-maps/api';
import './Map.scss'
import { Fab } from '@mui/material';
import { BarChart, BarChartOutlined, BarChartRounded } from '@mui/icons-material';
import ChartPopup from '../chart-popup';
import { MarkerClusterer } from "@googlemaps/markerclusterer";

// ! ДА ПРОСТИТ МЕНЯ ГОСПОДЬ
import bus from '../../assets/img/bus.png';
import busActive from '../../assets/img/busActive.png';
import camera from '../../assets/img/camera.png';
import cameraActive from '../../assets/img/cameraActive.png';
import meteo from '../../assets/img/meteo.png';
import meteoActive from '../../assets/img/meteoActive.png';
import svetofor from '../../assets/img/svetofor.png';
import svetoforActive from '../../assets/img/svetoforActive.png';
import charger from '../../assets/img/charger.png';
import chargerActive from '../../assets/img/chargerActive.png';

import busGreen from '../../assets/img/busGreen.png';
import busActiveGreen from '../../assets/img/busActiveGreen.png';
import cameraGreen from '../../assets/img/cameraGreen.png';
import cameraActiveGreen from '../../assets/img/cameraActiveGreen.png';
import meteoGreen from '../../assets/img/meteoGreen.png';
import meteoActiveGreen from '../../assets/img/meteoActiveGreen.png';
import svetoforGreen from '../../assets/img/svetoforGreen.png';
import svetoforActiveGreen from '../../assets/img/svetoforActiveGreen.png';
import chargerGreen from '../../assets/img/chargerGreen.png';
import chargerActiveGreen from '../../assets/img/chargerActiveGreen.png';

import busYellow from '../../assets/img/busYellow.png';
import busActiveYellow from '../../assets/img/busActiveYellow.png';
import cameraYellow from '../../assets/img/cameraYellow.png';
import cameraActiveYellow from '../../assets/img/cameraActiveYellow.png';
import meteoYellow from '../../assets/img/meteoYellow.png';
import meteoActiveYellow from '../../assets/img/meteoActiveYellow.png';
import svetoforYellow from '../../assets/img/svetoforYellow.png';
import svetoforActiveYellow from '../../assets/img/svetoforActiveYellow.png';
import chargerYellow from '../../assets/img/chargerYellow.png';
import chargerActiveYellow from '../../assets/img/chargerActiveYellow.png';

import busRed from '../../assets/img/busRed.png';
import busActiveRed from '../../assets/img/busActiveRed.png';
import cameraRed from '../../assets/img/cameraRed.png';
import cameraActiveRed from '../../assets/img/cameraActiveRed.png';
import meteoRed from '../../assets/img/meteoRed.png';
import meteoActiveRed from '../../assets/img/meteoActiveRed.png';
import svetoforRed from '../../assets/img/svetoforRed.png';
import svetoforActiveRed from '../../assets/img/svetoforActiveRed.png';
import chargerRed from '../../assets/img/chargerRed.png';
import chargerActiveRed from '../../assets/img/chargerActiveRed.png';
// ! АМИНЬ

const containerStyle = {
    width: '100vw',
    height: '100vh',

};

const center = {
    lat: 58.009473,
    lng: 56.227455
};

const icons = {
    "Видео": {
        "neutral": {
            "default": camera,
            "active": cameraActive
        },
        "green": {
            "default": cameraGreen,
            "active": cameraActiveGreen
        },
        "yellow": {
            "default": cameraYellow,
            "active": cameraActiveYellow
        },
        "red": {
            "default": cameraRed,
            "active": cameraActiveRed
        }
    },
    "Метео": {
        "neutral": {
            "default": meteo,
            "active": meteoActive
        },
        "green": {
            "default": meteoGreen,
            "active": meteoActiveGreen
        },
        "yellow": {
            "default": meteoYellow,
            "active": meteoActiveYellow
        },
        "red": {
            "default": meteoRed,
            "active": meteoActiveRed
        }
    },
    "Остановка": {
        "neutral": {
            "default": bus,
            "active": busActive
        },
        "green": {
            "default": busGreen,
            "active": busActiveGreen
        },
        "yellow": {
            "default": busYellow,
            "active": busActiveYellow
        },
        "red": {
            "default": busRed,
            "active": busActiveRed
        }
    },
    "Светофор": {
        "neutral": {
            "default": svetofor,
            "active": svetoforActive
        },
        "green": {
            "default": svetoforGreen,
            "active": svetoforActiveGreen
        },
        "yellow": {
            "default": svetoforYellow,
            "active": svetoforActiveYellow
        },
        "red": {
            "default": svetoforRed,
            "active": svetoforActiveRed
        }
    },
    "ЭЗС": {
        "neutral": {
            "default": charger,
            "active": chargerActive
        },
        "green": {
            "default": chargerGreen,
            "active": chargerActiveGreen
        },
        "yellow": {
            "default": chargerYellow,
            "active": chargerActiveYellow
        },
        "red": {
            "default": chargerRed,
            "active": chargerActiveRed
        }
    },
}

class LoadScriptOnlyIfNeeded extends LoadScript {
    componentDidMount() {
      const cleaningUp = true
      const isBrowser = typeof document !== "undefined" // require('@react-google-maps/api/src/utils/isbrowser')
      const isAlreadyLoaded = window.google && window.google.maps && document.querySelector('body.first-hit-completed') // AJAX page loading system is adding this class the first time the app is loaded
      if (!isAlreadyLoaded && isBrowser) {
        // @ts-ignore
        if (window.google && !cleaningUp) {
          console.error("google api is already presented")
          return
        }
  
        this.isCleaningUp().then(this.injectScript)
      }
  
      if (isAlreadyLoaded) {
        this.setState({ loaded: true })
      }
    }
  }

const MapComponent = ({ markers, currMarker, setMarker, objType, filters }) => {
    const mapRef = useRef(null);
    const markersRef = useRef([]);
    const markerClustererRef = useRef(null);
    const zoomInButtonRef = useRef(null);
    const zoomOutButtonRef = useRef(null);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const fetchData = async (street) => {
        try {
            const response = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(way["name"="${street}"](57.869895,56.029766,58.133947,56.418401););out body;>;out skel qt;`, {
                method: 'GET',
            });

            if (!response.ok) {
                console.log(response);
                // throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            const ways = jsonData["elements"].filter((entry) => entry["type"] == "way");
            const nodes = jsonData["elements"].filter((entry) => entry["type"] == "node");
            // console.log("nodes", nodes);
            var res = [];
            res = ways.map(way => {
                return way["nodes"].map((node) => {
                    const currNode = nodes.filter((newNode) => newNode["id"] == node)[0];
                    // console.log("bruh", currNode);
                    return { lat: currNode["lat"], lng: currNode["lon"] };
                });
            });
            return res;
        } catch (error) {

        }
    };


    const draw = async () => {
        await fetchData("улица Луначарского").then(roadCoordinates => {
            roadCoordinates.forEach(coordSet => {
                if (mapRef.current && zoomInButtonRef.current && zoomOutButtonRef.current) {

                    const polyline = new window.google.maps.Polyline({
                        path: coordSet,
                        geodesic: true,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 2,
                    });
                    setLoaded(true); // ! EVIL SHIT
                    polyline.setMap(mapRef.current);
                }
            });

        });
    }

    // NAVIGATION BUTTON LOGIC
    const handleZoomIn = () => {
        if (mapRef.current) {
            mapRef.current.setZoom(mapRef.current.getZoom() + 1);
        }
    };


    const handleZoomOut = () => {
        if (mapRef.current) {
            mapRef.current.setZoom(mapRef.current.getZoom() - 1);
        }
    };
    useEffect(() => {
        if (mapRef.current) {
          const map = mapRef.current;
          const newMarkers = markersRef.current;
    
          const styles = [
            {
              url: 'https://4x4photo.ru/wp-content/uploads/2023/05/4df0de19-e32a-491c-bcab-0d849f3cff9a.jpg',
              height: 60,
              width: 60,
              textColor: '#ffffff',
              textSize: 10,
            },
          ];

          if (markerClustererRef.current) {
            markerClustererRef.current.clearMarkers();
          }

          markerClustererRef.current = new MarkerClusterer({ map, newMarkers, styles });
            markers.forEach(marker => {
                console.log(marker["id"], currMarker)
                const newMarker = new window.google.maps.Marker({
                    map: mapRef.current,
                    position: new window.google.maps.LatLng(marker["coords"]["lat"], marker["coords"]["lon"]),
                    icon: {
                        url: icons[objType][marker["color"]][currMarker == marker["id"] ? "active" : "default"],
                        scaledSize: new window.google.maps.Size(40, 40),
                    }
                    
                });
                newMarker.addListener('click', () => {
                    setMarker(marker["id"])
                })
                markerClustererRef.current.addMarker(newMarker);
            })
                markerClustererRef.current.render();
            }
     }, [mapRef.current, loaded, markers, currMarker, filters]);

     console.log('ello', currMarker);

    return (
        <LoadScriptOnlyIfNeeded
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    mapId: "7ec5d822bd262c80"
                }}
                onLoad={map => {
                    mapRef.current = map;
                    draw();
                }}
                onClick={() => setMarker(-1)}
            >
            </GoogleMap>
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                display: "flex",
                flexDirection: "column",
                gap: "5px"
            }}>
                {/* TODO: material buttons */}
                <div className='zoomIn' ref={zoomInButtonRef} onClick={handleZoomIn}><p>+</p></div>
                <div className='zoomOut' ref={zoomOutButtonRef} onClick={handleZoomOut}><p>-</p></div>
            </div>
            <div style={{
                position: 'absolute',
                top: '90%',
                right: '10px',
            }}>

            </div>
         </LoadScriptOnlyIfNeeded>
    );
};

export default MapComponent;
