import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, OverlayView, Marker } from '@react-google-maps/api';
import './Map.scss'

const containerStyle = {
    width: '100vw',
    height: '100vh',
 
};

const center = {
    lat: 58.009473,
    lng: 56.227455
};

const MapComponent = ({markers, currMarker, setMarker}) => {
    const mapRef = useRef(null);
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
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            const ways = jsonData["elements"].filter((entry) => entry["type"] == "way");
            const nodes = jsonData["elements"].filter((entry) => entry["type"] == "node");
            // console.log("nodes", nodes);
            var res = [];
            res = ways.map(way => {
                return way["nodes"].map((node) => {
                    const currNode =  nodes.filter((newNode) => newNode["id"] == node)[0];
                    // console.log("bruh", currNode);
                    return {lat: currNode["lat"], lng: currNode["lon"]};
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

    return (
        <LoadScript
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
            {loaded && markers.map((mark) => {
                return <Marker
                    position={{ lat: mark.lat, lng: mark.lng }}
                    icon={{
                        url: 'https://4x4photo.ru/wp-content/uploads/2023/05/4df0de19-e32a-491c-bcab-0d849f3cff9a.jpg',
                        scaledSize: new window.google.maps.Size(60, 60),
                    }}
                    label={currMarker == mark.id ? {
                        text: "Выбран",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#F00"
                    } : {text: " "}}
                    onClick={() => setMarker(mark.id)}
                    
                />
            })
            }
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
                <div className='zoomIn' ref={zoomInButtonRef} onClick={handleZoomIn}><p>+</p></div>
                <div className='zoomOut' ref={zoomOutButtonRef} onClick={handleZoomOut}><p>-</p></div>
            </div>
        </LoadScript>
    );
};

export default MapComponent;
