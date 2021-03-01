import React from "react"
import kh from "../img/kh.jpg";
import p5 from "../img/p5.jpg";

class Presentation extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <>
                <main>

                    <div className={"Presentation container-fluid"}>
                        <div className={"row "} >
                            <div className={"col-12 col-lg-10 offset-lg-1  col-xl-8 offset-xl-2 mt-2 Presentation_center "} >
                                <h2>Présentation du site</h2>
                                <div className={"mb-3"}>
                                    <h3>Origine</h3>
                                    <div className={"row"}>

                                        <div className={"col-lg-6 col-12"}>
                                            <img src={kh} alt="logo" className="img_presentation"></img>
                                        </div>
                                        <div className={"col-lg-6 col-12 div_presentation"}>
                                            oui
                                        </div>
                                    </div>
                                </div>
                                <div className={"mb-3"}>
                                    <h3>Objectif</h3>
                                    <div className={"row"}>
                                        <div className={"col-lg-6 col-12 div_presentation"}>
                                            oui
                                        </div>
                                        <div className={"col-lg-6 col-12"}>
                                            <img src={p5} alt="logo" className="img_presentation"></img>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <h3>Liste des meilleurs RPG selon le créateur du site</h3>
                                    <div className={"row"}>
                                        <div className={"col-sm-6 col-12 div_presentation"}>
                                            <ol start="1" >
                                                <li>Saga Kingdom Hearts</li>
                                                <li>Tales of Berseria</li>
                                                <li>Personna 5 (Royal et Strikers)</li>
                                                <li>Final fantasy 7</li>
                                                <li>Saga Pokemon</li>
                                                <li>Ni no kuni 2</li>
                                                <li>Dragon Quest XI</li>
                                                <li>Final fantasy 7 remake</li>
                                            </ol>
                                        </div>
                                        <div className={"col-sm-6 col-12 div_presentation"}>
                                            <ol start="9">
                                                <li>Final fantasy 15</li>
                                                <li>Paper Mario Wii</li>
                                                <li>Nier Automata</li>
                                                <li>FE: Three Houses</li>
                                                <li>Final fantasy 6</li>
                                                <li>South Park (PS3 et PS4)</li>
                                                <li>Evoland 2</li>
                                                <li>Chrono Trigger</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

            </>
        )
    }
}

export default Presentation;