import React, { useEffect, useRef, useState } from "react";
import "./CircleMenu.css";

import { MENU_OPTIONS } from "../../constants";

//icons
import { IoPower } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoCogOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";


const CircleMenu = ({ clickInfo, togglePower, toggleMenu }) => {

    const menuRef = useRef();

    const [active, setActive] = useState("")

    function toggleActive() {
        menuRef.current.classList.toggle("activeMenu");
    }

    useEffect(() => {
        console.log(active)
    }, [active])

    return (
        <>
            <div className="menu" ref={menuRef}>
                <div className="toggle"
                    onClick={() => {
                        toggleActive();
                        togglePower()
                    }}>
                    <IoPower />
                </div>
                <ul className="menuList">
                    <li className="option" id="info">
                        <IoAccessibility className="optionIcon icon1" onClick={() => { clickInfo(MENU_OPTIONS.INFORMATION); setActive(1) }} />
                    </li>
                    <li className="option" id="tecnology">
                        <IoCogOutline className="optionIcon icon2" onClick={() => { clickInfo(MENU_OPTIONS.TECHNOLOGIES); setActive(2) }} />
                    </li>
                    <li className="option" id="projects">
                        <IoConstructOutline className="optionIcon icon3" onClick={() => { clickInfo(MENU_OPTIONS.PROJECTS); setActive(3); toggleMenu() }} />
                    </li>
                    <li className="option" id="contact">
                        <IoPeopleOutline className="optionIcon icon4" onClick={() => { clickInfo(MENU_OPTIONS.CONTACT); setActive(4) }} />
                    </li>
                </ul>
            </div>
        </>
    );
}
export default CircleMenu