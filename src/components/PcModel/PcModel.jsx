import React, { useEffect, useRef } from "react";
import { MENU_OPTIONS, PROJECTS_OPTIONS } from "../../constants";
import "./PcModel.css";

//icons
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const PcModel = ({ activeOption, powerState, projectSelect }) => {

    const screenRef = useRef()
    const screenDisplay = useRef()

    useEffect(() => {
        screenRef.current.classList.toggle("shutUp");
        screenDisplay.current.classList.toggle("off");
    }, [powerState]);

    return (
        <section className="pcContainer">
            <section className="pcMonitor">
                <div className="pcCamera" />
                <div className="pcScreen shutUp" ref={screenRef}>
                    <div ref={screenDisplay}>
                        {activeOption === MENU_OPTIONS.INFORMATION && (
                            <div className="slide1" >
                                <h1 className="title">Hola</h1>
                                <span className="text">Mi nombre es Nahuel Cuaglio, y soy egresado de Tecnico Informatico con gran gusto por el desarrollo web, busco formar parte de una organizacion donde pueda dar mis primeros pasos en el Desarrollo Web Full Stack y aprender sobre nuevas Tecnologias.</span>
                            </div>
                        )}
                        {activeOption === MENU_OPTIONS.TECHNOLOGIES && (
                            <div className="slide2">
                                <ul>
                                    <h1 className="title">Tecnologias</h1>
                                    <li className="list">Html</li>
                                    <li className="list">Css</li>
                                    <li className="list">JavaScript</li>
                                    <li className="list">React</li>
                                    <li className="list">Node.JS</li>
                                </ul>
                            </div>
                        )}
                        {activeOption === MENU_OPTIONS.PROJECTS && (
                            <div className="slide3">
                                {projectSelect === PROJECTS_OPTIONS.RICK_AND_MORTY && (
                                    <>
                                        <img src="" alt="RickAndMorty" />
                                        <a href="">See More1</a>
                                    </>
                                )}
                                {projectSelect === PROJECTS_OPTIONS.NETFLIX && (
                                    <>
                                        <img src="" alt="Netflix" />
                                        <a href="">See More2</a>
                                    </>
                                )}
                                {projectSelect === PROJECTS_OPTIONS.SPACE && (
                                    <>
                                        <img src="" alt="Space" />
                                        <a href="">See More3</a>
                                    </>
                                )}
                                {projectSelect === PROJECTS_OPTIONS.DEVPLACE_CHALLENGE && (
                                    <>
                                        <img src="" alt="Challenge" />
                                        <a href="">See More4</a>
                                    </>
                                )}
                                {projectSelect === PROJECTS_OPTIONS.SIN_IGUAL && (
                                    <>
                                        <img src="" alt="SinIgual" />
                                        <a href="">See More5</a>
                                    </>
                                )}
                            </div>
                        )}
                        {activeOption === MENU_OPTIONS.CONTACT && (
                            <div className="slide4">
                                <ul>
                                    <h1 className="title">Si quieres comunicarte conmigo, puedes hacerlo a traves de mis redes</h1>
                                    <li className="list nolist"><a href="https://github.com/CuaglioN?tab=repositories"><IoLogoGithub />GitHub</a></li>
                                    <li className="list nolist"><a href="https://www.linkedin.com/in/nahuel-cuaglio/"><IoLogoLinkedin />LinkedIn</a></li>
                                    <li className="list nolist"><a href="mailto:cuaglionahuel@gmail.com"><IoMail />Gmail</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <div className="pcNake">
                <div className="pcFoot"></div>
            </div>
        </section>
    )
}
export default PcModel;