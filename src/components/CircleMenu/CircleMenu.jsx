import React, { useRef } from "react";
import "./CircleMenu.css";

//icons
import { IoPower } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoCogOutline } from "react-icons/io5";
import { IoConstructOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { MENU_OPTIONS } from "../../constants";


const CircleMenu = ({ clickInfo }) => {

    const menuRef = useRef();

    function toggleActive() {
        menuRef.current.classList.toggle("activeMenu");
    }

    return (
        <>
            <div className="menu" ref={menuRef}>
                <div className="toggle" onClick={toggleActive}>
                    <IoPower />
                </div>
                <ul className="menuList">
                    <li className="option" id="info">
                        <a className="optionIcon" href="#"><IoAccessibility className="icon1" onClick={() => clickInfo(MENU_OPTIONS.INFORMATION)} /></a>
                    </li>
                    <li className="option" id="tecnology">
                        <a className="optionIcon" href="#"><IoCogOutline className="icon2" onClick={() => clickInfo(MENU_OPTIONS.TECHNOLOGIES)} /></a>
                    </li>
                    <li className="option" id="projects">
                        <a className="optionIcon" href="#"><IoConstructOutline className="icon3" onClick={() => clickInfo(MENU_OPTIONS.PROJECTS)} /></a>
                    </li>
                    <li className="option" id="contact">
                        <a className="optionIcon" href="#"><IoPeopleOutline className="icon4" onClick={() => clickInfo(MENU_OPTIONS.CONTACT)} /></a>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default CircleMenu