import './Map-Sidebar.scss'

function MapSidebar({markers, marker}) {

    const currMarker = markers.filter(mark => mark.id == marker)[0];
    console.log(currMarker)

    return(
        <div className="sidebar-container">
            {currMarker && <p>{`${currMarker["lat"]} ${currMarker["lng"]}`}</p>}
        </div>
    )
}

export default MapSidebar;