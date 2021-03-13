import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import baseUrl from "../baseurl/BaseUrl";
import { Redirect } from 'react-router-dom'


class Inscription extends React.Component{

    url = new baseUrl

    constructor() {
        super()
        this.state = {
            name : '',
            email : '',
            password1 : '',
            password2 : '',
            redirect: false,
            errors: []

        }
    }


    handleNameChange = event => {
        this.setState({
            name : event.target.value
        })
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
    handlePasswordConfirmChange = event => {
        this.setState({
            password2 : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('inscription')

        let bodyFormData = new FormData()
        bodyFormData.set('name', this.state.name)
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password1)
        bodyFormData.set('confirmPassword', this.state.password2)

        axios.post(this.url.value+'/api/register', bodyFormData)
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
                                    <label htmlFor="name">Pseudo:</label>
                                    <input onChange={this.handleNameChange} type="text" className="form-control" id="name" placeholder="Entrer un pseudo" />
                                    { this.state.errors && this.state.errors['name'] ? <div class={"invalide-feedback"}>{ this.state.errors['name']}</div> : ''}

                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input onChange={this.handleMailChange} type="email" className="form-control" id="email" placeholder="Entrer votre email" />
                                    { this.state.errors && this.state.errors['email'] ? <div class={"invalide-feedback"}>{ this.state.errors['email']}</div> : ''}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Mot de passe:</label>
                                    <input onChange={this.handlePasswordChange} type="password" className="form-control" id="password1"
                                           placeholder="Mot de passe"/>
                                    { this.state.errors && this.state.errors['password'] ? <div class={"invalide-feedback"}>{ this.state.errors['password']}</div> : ''}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password12">Retaper le mot de passe:</label>
                                    <input onChange={this.handlePasswordConfirmChange} type="password" className="form-control" id="password2" placeholder="Retaper le mot de passe"/>
                                    { this.state.errors && this.state.errors['confirmPassword'] ? <div class={"invalide-feedback"}>{ this.state.errors['confirmPassword']}</div> : ''}
                                </div>

                                <button type="submit" className="btn btn-dark w-100 btninsco" onClick={this.handleSubmit}>Inscription</button>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Inscription;