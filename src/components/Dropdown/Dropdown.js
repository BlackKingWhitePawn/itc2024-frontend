import React, { useState } from 'react';
import './Dropdown.css';
import openDropDown from '../../assets/icons/openDropDown.svg'
import closeDropDown from '../../assets/icons/closeDropDown.svg'


function Dropdown({id, selectedOption, setSelectedOption, isOpen, setIsOpen, labels}) {

    const toggleDropdown = () => isOpen == id ? setIsOpen(-1) : setIsOpen(id);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    
    var options = labels;

    return (
        <div className="dropdown-container">
            <div className="dropdown-selected" onClick={toggleDropdown}>
                {selectedOption.label}
                <img src={isOpen == id ? openDropDown : closeDropDown} width={12} height={6}/>
            </div>
            {isOpen == id && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            className={`dropdown-option ${selectedOption.id === option.id ? 'selected' : ''}`}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
