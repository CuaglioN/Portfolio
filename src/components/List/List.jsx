import react, { useEffect, useRef } from "react";
import "./List.css"

import { PROJECTS_OPTIONS } from "../../constants";

import { IoBrowsersOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const SelectList = ({ activeOption, projectSelect, menuDisplay, powerState }) => {

    const listRef = useRef();

    useEffect(() => {
        listRef.current.classList.toggle("displayOff");
    }, [menuDisplay])

    useEffect(() => {
        if (powerState === false) {
            listRef.current.classList.toggle("displayOff", true);
        }
    }, [powerState])

    useEffect(() => {
        if (activeOption != "proj") {
            listRef.current.classList.toggle("displayOff", true);
        }
    }, [activeOption]);

    return (
        <>
            <div className="selectListContainer" ref={listRef}>
                <div className="windowIcons"><IoBrowsersOutline />Proyectos<IoCloseOutline /></div>
                <ul className="listGroup">
                    <div>Grupo</div>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.RICK_AND_MORTY)}>Rick and Morty Wiki</button></li>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.NETFLIX)}>Netflix</button></li>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.STARBUCKS)}>Starbucks</button></li>
                </ul>
                <ul className="listGroup">
                    <div>Individual</div>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.SIN_IGUAL)}>SinIgual</button></li>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.DEVPLACE_CHALLENGE)}>DevPlave Challenge</button></li>
                </ul>
            </div>
        </>
    )
}
export default SelectList;