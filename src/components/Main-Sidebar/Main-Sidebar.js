import './Main-Sidebar.scss'
import { ReactComponent as Logo } from '../../assets/icons/user.svg'
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
            <div onClick={() => {setObjType("Видео")}} className='cat-container'>
                <Logo style={{"backgroundColor": "#EFE9F5"}} className="logo1" />
                <p>Видео</p>
            </div>
            <div onClick={() => {setObjType("Метео")}} className='cat-container'>
                <Logo style={{"backgroundColor": "#F5E8EB"}} className="logo2" />
                <p>Метео</p>
            </div>
            {/* <p className='cat-name'>МСДИДИ</p> */}
            <div onClick={() => {setObjType("Светофор")}} className='cat-container'>
                <Logo style={{"backgroundColor": "#EFE9F5"}} className="logo3" />
                <p>Светофор</p>
            </div>
            <div onClick={() => {setObjType("Остановка")}} className='cat-container'>
                <Logo style={{"backgroundColor": "#F4EDEA"}} className="logo4" />
                <p>Остановка</p>
            </div>
            <div onClick={() => {setObjType("ЭЗС")}} className='cat-container'>
                <Logo style={{"backgroundColor": "#F4EDEA"}} className="logo4" />
                <p>ЭЗС</p>
            </div>
        </div>
    )
}

export default MainSidebar;