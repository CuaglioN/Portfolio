import React, { useRef } from "react";
import "./CircleMenu.css";

//icons
import { IoPower } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoCogOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MENU_OPTIONS } from "../../constants";


const CircleMenu = ({ clickInfo, powerInfo }) => {

    const menuRef = useRef();

    function toggleActive() {
        menuRef.current.classList.toggle("activeMenu");
    }

    return (
        <>
            <div className="menu" ref={menuRef}>
                <div className="toggle"
                    onClick={() => {
                        toggleActive()
                        powerInfo("a")
                    }}>
                    <IoPower />
                </div>
                <ul className="menuList">
                    <li className="option" id="info">
                        <IoAccessibility className="optionIcon icon1" onClick={() => clickInfo(MENU_OPTIONS.INFORMATION)} />
                    </li>
                    <li className="option" id="tecnology">
                        <IoCogOutline className="optionIcon icon2" onClick={() => clickInfo(MENU_OPTIONS.TECHNOLOGIES)} />
                    </li>
                    <li className="option" id="projects">
                        <IoConstructOutline className="optionIcon icon3" onClick={() => clickInfo(MENU_OPTIONS.PROJECTS)} />
                    </li>
                    <li className="option" id="contact">
                        <IoPeopleOutline className="optionIcon icon4" onClick={() => clickInfo(MENU_OPTIONS.CONTACT)} />
                    </li>
                </ul>
            </div>
        </>
    );
}
export default CircleMenu