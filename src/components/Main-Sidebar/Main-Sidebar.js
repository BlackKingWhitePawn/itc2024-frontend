import './Main-Sidebar.scss'

function MainSidebar({open}) {
    return(
        <div className={open ? "main-sidebar sidebar-open" : "main-sidebar sidebar-closed"}>
            <p>Привет, мир!</p>
        </div>
    )
}

export default MainSidebar;