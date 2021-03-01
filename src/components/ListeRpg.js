import React from "react"
import {Link} from "react-router-dom";
import p5 from "../img/p5.jpg";
import logo from "../img/logo.png";

class ListeRpg extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <>

                <main class="listerpg">
                    <h2 className={"listerpg-tittle"}>Liste des RPG</h2>
                    <div className={"container-fluid"}>
                        <div className={"row "} >
                            <div className={"col-3 offset-2 card-list mb-3"}>
                                <div className={"row "} >
                                    <h3 className={"col-6 text-center"}>
                                        Personna 5
                                    </h3>
                                    <div className={"col-6 text-center note"}>
                                        Note: 88/100
                                    </div>
                                    <div className={"col-12 text-center note mt-4"}>
                                        <img src={p5} alt="logo" className="img_listrpg"></img>
                                    </div>
                                    <div className={"col-12 text-center note mt-4 description_listrpg"}>
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs fsdfsdfsd sdfsdfsdf
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs fsdfsdfsd sdfsdfsdf
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs fsdfsdfsd sdfsdfsdf
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs fsdfsdfsd sdfsdfsdf
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs fsdfsdfsd sdfsdfsdf
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs fsdfsdfsd sdfsdfsdf
                                        dsfsdfs fsdfsdfsd sdfsdfsdf dsfsdfs
                                    </div>
                                    <div className={"col-12 text-center note mt-4"}>
                                        Publier le 04/03/2020
                                    </div>
                                </div>
                            </div>
                            <div className={"col-3 offset-2 card-list"}>
                                oui
                            </div>
                            <div className={"col-3 offset-2"}>
                                oui
                            </div>
                            <div className={"col-3 offset-2"}>
                                oui
                            </div>
                            <div className={"col-3 offset-2"}>
                                oui
                            </div>

                        </div>
                    </div>
                </main>

            </>
        )
    }
}

export default ListeRpg;