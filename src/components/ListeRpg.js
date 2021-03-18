import React from "react"
import axios from "axios";
import baseUrl from "../baseurl/BaseUrl";

class ListeRpg extends React.Component {

    url = new baseUrl

    constructor() {
        super()
        this.state = {
            pictures: []
        }
    }

    componentWillMount() {
        axios.get(this.url.value + '/api/listrpg')
            .then(res => {
                this.setState({pictures: res.data})

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>

            <main class="listerpg">
                <h2 className={"listerpg-tittle"}>Liste des RPG</h2>
                <div className={"container-fluid"}>
                    <div className={"row "}>

                        {
                            this.state.pictures.map((picture) =>
                                <div
                                    className={"col-12 col-sm-8 offset-sm-2 col-lg-6 col-xl-6 offset-md-2  offset-lg-0  px-4 mb-3"}>
                                    <div className={"card-list"}>
                                        <div className={"row "}>
                                            < h3 className={"col-lg-6 text-center"}>
                                                { picture.title}
                                            </h3>
                                            <div className={"col-lg-6 text-center note"}>
                                                Note: { picture.note}/100
                                            </div>
                                            <div className={"col-12 text-center note mt-4"}>
                                                <img src={`${this.url.value}/storage/pictures/${picture.src_img}`} alt="logo" className="img_listrpg"></img>
                                            </div>
                                            <div className={"col-12 text-center note mt-4 description_listrpg"}>
                                                { picture.description}
                                            </div>
                                            <div className={"col-12 text-center note mt-4"}>
                                                Publier le { picture.created_at.split("T")[0]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>

            </main>

    </>
    )
    }
}

export default ListeRpg;