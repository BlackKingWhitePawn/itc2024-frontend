import './Main-Sidebar.scss'
import { ReactComponent as Bus } from '../../assets/icons/bus.svg'
import { ReactComponent as Svetofor } from '../../assets/icons/svetofor.svg'
import { ReactComponent as Meteo } from '../../assets/icons/meteo.svg'
import { ReactComponent as Camera } from '../../assets/icons/camera.svg'
import { ReactComponent as Charger } from '../../assets/icons/charger.svg'
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';

function MainSidebar({open, category, objType, setObjType, filters, setFilters}) {
    
    const [dropdownOpen, setDropdownOpen] = useState(-1); //contains id of open atm dropdown
    const filtersLabels = [
        {id: 0, label: "Без фильтра"},
        {id: 1, label: "По дате последнего обслуживания"},
        {id: 2, label: "По рейтингу истории"},
        {id: 3, label: "По рейтингу предсказания"}
    ];

    const catOptions = {
        1: "Объекты ИТС",
        2: "Аналитика",
        3: "История отчетов"
    };

    return(
        <div className={open ? "main-sidebar sidebar-open" : "main-sidebar sidebar-closed"}>
            <h1>{catOptions[category]}</h1>
            <Dropdown id={1} selectedOption={filters} setSelectedOption={setFilters} isOpen={dropdownOpen} setIsOpen={setDropdownOpen} labels={filtersLabels} />
            {/* <p className='cat-name'>УДС</p> */}
            <div onClick={() => {setObjType("Видео")}} className={objType== "Видео" ? 'cat-container cat-selected' : 'cat-container'}>
                <Camera style={{"backgroundColor": "#EFE9F5"}} className="logo1" />
                <p>Видео</p>
            </div>
            <div onClick={() => {setObjType("Метео")}} className={objType== "Метео" ? 'cat-container cat-selected' : 'cat-container'}>
                <Meteo style={{"backgroundColor": "#F5E8EB"}} className="logo2" />
                <p>Метео</p>
            </div>
            {/* <p className='cat-name'>МСДИДИ</p> */}
            <div onClick={() => {setObjType("Светофор")}} className={objType== "Светофор" ? 'cat-container cat-selected' : 'cat-container'}>
                <Svetofor style={{"backgroundColor": "#EFE9F5"}} className="logo1" />
                <p>Светофор</p>
            </div>
            <div onClick={() => {setObjType("Остановка")}} className={objType== "Остановка" ? 'cat-container cat-selected' : 'cat-container'}>
                <Bus style={{"backgroundColor": "#F4EDEA"}} className="logo3" />
                <p>Остановка</p>
            </div>
            <div onClick={() => {setObjType("ЭЗС")}} className={objType== "ЭЗС" ? 'cat-container cat-selected' : 'cat-container'}>
                <Charger style={{"backgroundColor": "#F5E8EB"}} className="logo2" />
                <p>ЭЗС</p>
            </div>
        </div>
    )
}

export default MainSidebar;