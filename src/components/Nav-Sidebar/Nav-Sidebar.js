import './Nav-Sidebar.scss'
import expand from '../../assets/icons/expand.svg'

function NavSidebar({markers, marker, open, setOpen}) {

    const currMarker = markers.filter(mark => mark.id == marker)[0];
    console.log(currMarker)

    return(
        <div className="sidebar-container">
            <div onClick={() => setOpen(!open)} className={open ? "expand expand-open" : "expand expand-closed"}>
                <img src={expand}/>
            </div>
            {currMarker && <p>{`${currMarker["lat"]} ${currMarker["lng"]}`}</p>}
        </div>
    )
}

export default NavSidebar;