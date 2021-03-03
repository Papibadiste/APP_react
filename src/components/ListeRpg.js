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
                            <div className={"col-12 col-sm-8 offset-sm-2 col-lg-6 offset-md-2  offset-lg-0  px-4 mb-3"}>
                                <div className={"card-list"}>
                                    <div className={"row "} >
                                        <h3 className={"col-lg-6 text-center"}>
                                            Personna 5
                                        </h3>
                                        <div className={"col-lg-6 text-center note"}>
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

                            </div>
                            <div className={"col-6 col-lg-6 offset-lg-0  px-4 mb-3"}>
                                <div className={"card-list"}>
                                oui
                                </div>
                            </div>
                            <div className={"col-6 col-lg-6 offset-lg-0  px-4 mb-3"}>
                                    <div className={"card-list"}>
                                oui
                                    </div>
                            </div>
                            <div className={"col-6 col-lg-6 offset-lg-0  px-4 mb-3"}>
                                        <div className={"card-list"}>
                                oui
                                        </div>
                            </div>
                            <div className={"col-6 col-lg-6 offset-lg-0  px-4 mb-3"}>
                                            <div className={"card-list"}>
                                oui
                                            </div>
                            </div>

                        </div>
                    </div>
                </main>

            </>
        )
    }
}

export default ListeRpg;