import React from "react";
import { useState } from "react/cjs/react.development";
import "./PcModel.css";

import Carrousel from "../Carrousel/Carrousel";

const PcModel = () => {

    let [mySlides, slide] = useState([])



    return (
        <section className="pcContainer">
            <section className="pcMonitor">
                <div className="pcCamera"></div>
                <div className="pcScreen">
                    <div className="slide">
                        <div className="text">Presentacion</div>
                    </div>
                    <div className="slide">
                        <div className="text">Tecnologias</div>
                    </div>
                    <div className="slide">
                        <div className="text">Projectos</div>
                    </div>
                    <div className="slide">
                        <div className="text">Contacto</div>
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