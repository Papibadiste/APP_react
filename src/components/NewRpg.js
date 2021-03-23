import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import baseUrl from "../baseurl/BaseUrl";
import {Redirect} from "react-router-dom";


class NewRpg extends React.Component{

    url = new baseUrl

    constructor() {
        super()
        this.state = {
            name : "",
            description : "",
            photo : "",
            note : "empty",
            redirect : false,
            errors: []
        }
    }
    handleNameChange = event => {
        this.setState({
            name : event.target.value
        })
        console.log(this.state)
    }
    handleNoteChange = event => {
        this.setState({
            note : event.target.value
        })
        console.log(this.state)
    }
    handleDescriptionChange = event => {
        this.setState({
            description : event.target.value
        })
        console.log(this.state)
    }
    handlePhotoChange = event => {
        this.setState({
            photo : event.target.files[0]
        })
        console.log(this.state)
    }
    handleSubmit = event => {
        event.preventDefault()

        let bodyFormData = new FormData()
        bodyFormData.set('title', this.state.name)
        bodyFormData.set('note', this.state.note)
        bodyFormData.set('description', this.state.description)
        bodyFormData.set('src_img', this.state.photo)

        axios.post(this.url.value+'/api/newrpg', bodyFormData)
            .then(res => {
                console.log(res.data)
                this.setState({redirect : true })

            })
            .catch(error =>{
                if(error.response.status === 401) {
                    this.setState({errors: error.response.data.errors}, () => console.log(this.state))
                }
            })

    }



    render(){
        if(this.state.redirect === true){
            return (
                <>
                    <div className={"container-fluid"}>
                        <div className={"row "} >
                            <div className={"col-6 offset-3 card-list mt-2 inscritiontext"} >
                                <h2 className={"listerpg-tittle"}>Merci pour la proposition, elle sera étudiée dès que possible</h2>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if(!localStorage.getItem('token')){
            return (<Redirect to={"/listerpg"}/>)
        }
        return (
            <>
                <div className={"container-fluid"}>
                    <div className={"row "} >
                        <div className={"col-6 offset-3 card-list mt-2 inscritiontext"} >
                            <h2 className={"listerpg-tittle"}>Proposer un jeu</h2>
                            <form className={ "p-4 " } method={'POST'} encType={"multipart/form-data"}>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="name">Nom du jeu:</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="Nom du jeu" id={"name"} onChange={this.handleNameChange}/>
                                        { this.state.errors && this.state.errors['title'] ? <div class={"invalide-feedback"}>{ this.state.errors['title']}</div> : ''}
                                    </div>
                                    <div className="col">
                                        <label htmlFor="note">Note:</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="note sur 100" id={"note"} onChange={this.handleNoteChange}/>
                                        { this.state.errors && this.state.errors['note'] ? <div class={"invalide-feedback"}>{ this.state.errors['note']}</div> : ''}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" id="description" rows="10" onChange={this.handleDescriptionChange}/>
                                    { this.state.errors && this.state.errors['description'] ? <div class={"invalide-feedback"}>{ this.state.errors['description']}</div> : ''}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="photo">Image du jeu</label>
                                    <input type="file" className="form-control-file text_input_file" id="photo" onChange={this.handlePhotoChange}/>
                                    { this.state.errors && this.state.errors['src_img'] ? <div class={"invalide-feedback"}>{ this.state.errors['src_img']}</div> : ''}
                                </div>
                                <button type="submit" className="btn btn-dark btninsco" onClick={this.handleSubmit}>Envoyer la proposition</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewRpg;