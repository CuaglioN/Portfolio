import React from "react";
import { MENU_OPTIONS } from "../../constants";
import "./PcModel.css";

//icons
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const PcModel = ({ activeOption }) => {

    console.log(activeOption)



    return (
        <section className="pcContainer">
            <section className="pcMonitor">
                <div className="pcCamera"></div>
                <div className="pcScreen">
                    {activeOption === MENU_OPTIONS.INFORMATION && (
                        <div className="slide1" >
                            <h1 className="title">Hola</h1>
                            <span className="text">Mi nombre es Nahuel Cuaglio, y soy egresado de Tecnico Informatico con gran gusto por el desarrollo front end, busco formar parte de una organizacion donde pueda dar mis primeros pasos en el Desarrollo Web Full Stack y aprender sobre nuevas Tecnologias.</span>
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
                            <ul>
                                <h1 className="title">Grupal</h1>
                                <li className="list"><a href="#">RickAndMortyWiki</a></li>
                                <li className="list"><a href="#">Starbucks</a></li>
                                <li className="list"><a href="#">MercadoLibre</a></li>
                            </ul>
                            <ul>
                                <h1 className="title">Individual</h1>
                                <li className="list"><a href="#">DevPlave Challenge</a></li>
                                <li className="list"><a href="#">SinIgual</a></li>
                            </ul>
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
            </section>
            <div className="pcNake">
                <div className="pcFoot"></div>
            </div>
        </section>
    )
}
export default PcModel;