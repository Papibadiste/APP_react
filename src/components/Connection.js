import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import baseUrl from "../baseurl/BaseUrl";
import {Redirect} from "react-router-dom";


class Connection extends React.Component{

    url = new baseUrl

    constructor() {
        super()
        this.state = {
            password1 : '',
            email : '',
            redirect: false,
            errors: []
        }
    }

    handleMailChange = event => {
        this.setState({
            email : event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password1 : event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log('Connection')

        let bodyFormData = new FormData()
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password1)

        axios.post(this.url.value+'/api/login', bodyFormData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({redirect : true })
            })
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors : error.response.data.errors} , () => console.log(this.state) )
                }
            })

    }

    render(){
        if(this.state.redirect === true){
            return (<Redirect to={"/listerpg"}/>)
        }
        return (
            <>
                <div className={"container-fluid"}>
                    <div className={"row "} >
                        <div className={"col-6 offset-3 card-list mt-2"} >

                            <form className={ "p-4 inscritiontext" }>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input onChange={this.handleMailChange} type="email" className="form-control" id="email" placeholder="Entrer votre email" />
                                    { this.state.errors && this.state.errors.email ? <div class={"invalide-feedback"}>{ this.state.errors['email']}</div> : ''}

                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Mot de passe:</label>
                                    <input onChange={this.handlePasswordChange} type="password" className="form-control" id="password1"
                                           placeholder="Mot de passe"/>
                                    { this.state.errors && this.state.errors.password ? <div class={"invalide-feedback"}>{ this.state.errors['password']}</div> : ''}
                                </div>
                                { this.state.errors && this.state.errors === "bad_credentials" ? <div class={"alert alert-danger invalide-feedback"}>Les identifiants sont invalides</div> : ''}
                                <button type="submit" className="btn btn-dark w-100 btninsco" onClick={this.handleSubmit}>Connexion</button>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Connection;