import react from "react";
import "./List.css"

import { PROJECTS_OPTIONS } from "../../constants";

const SelectList = ({ projectSelect }) => {

    return (
        <>
            <div className="selectListContainer">
                <div>Grupo</div>
                <ul>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.RICK_AND_MORTY)}>Rick and Morty Wiki</button></li>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.NETFLIX)}>Netflix</button></li>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.SPACE)}>Space documental</button></li>
                </ul>
                <div>Individual</div>
                <ul>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.SIN_IGUAL)}>SinIgual</button></li>
                    <li><button className="buttonList" onClick={() => projectSelect(PROJECTS_OPTIONS.DEVPLACE_CHALLENGE)}>DevPlave Challenge</button></li>
                </ul>
            </div>
        </>
    )
}
export default SelectList;