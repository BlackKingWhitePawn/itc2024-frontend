import './Nav-Sidebar.scss'
import expand from '../../assets/icons/expand.svg'
import logoITS from "../../assets/icons/logoITS.svg"
import { Fab } from "@mui/material";
import { BarChart } from '@mui/icons-material';
import { Traffic } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ExitToAppRounded } from '@mui/icons-material';

function NavSidebar({chosen, setChosen, open, setOpen}) {
const navigation = useNavigate()

    function handleLogout () {
        navigation("/login")
    }

    return(
        <div className="sidebar-container">
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <div onClick={() => setOpen(!open)} className={open ? "expand expand-open" : "expand expand-closed"}>
                <img src={expand}/> 
                
            </div>
            <img src={logoITS} style={{opacity:"0.3", pointerEvents:"none"}}></img>
            <BarChart onClick={() => setChosen(1)} style={{alignSelf:"center", backgroundColor: chosen == 1 ? "#ccf" : "#fff", borderRadius:"20px", width:"25px", height:"25px", padding:"12.5px", cursor:"pointer"}}/>
            <Traffic onClick={() => setChosen(2)} style={{alignSelf:"center", backgroundColor: chosen == 2 ? "#ccf" : "#fff", borderRadius:"20px", width:"25px", height:"25px", padding:"12.5px", cursor:"pointer"}}/>
            </div>
            <ExitToAppRounded color="error"  style={{alignSelf:"", backgroundColor:"#FFF", borderRadius:"20px", width:"25px", height:"25px", padding:"12.5px", cursor:"pointer", marginBottom:"10px"}} onClick={handleLogout}/>
        </div>
    )
}

export default NavSidebar;