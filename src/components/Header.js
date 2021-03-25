import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Presentation from "./Welcome";
import ListeRpg from "./ListeRpg";
import Connection from "./Connection";
import Inscription from "./Inscription";
import Home from "./Home";
import NewRpg from "./NewRpg";
import Admin from "./Admin";

class Header extends React.Component{
    constructor() {
        super()
        this.state = {
            token: null
        }
    }

    logout = () => {
        localStorage.setItem('token', '')
        localStorage.clear()
        this.setState({token : null})
    }

    login = () => {
        this.setState({token : null})
    }



    render(){

        return (
            <>

                <Navbar class="header" bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand className={"link-header "} ><Link class={"navbar-brand title"} to="/">RPG</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav className={"link-header"}> <Link class={"nav-link"} to="/presentation">Présentation</Link> </Nav>
                            <Nav className={"link-header"}> <Link class={"nav-link"} to="/listerpg">Liste des RPG</Link> </Nav>
                            { localStorage.getItem('token') ?
                                <>

                                    <Nav className={"link-header"}>
                                        <Link class={"nav-link"} to="/newrpg">Proposer un jeu</Link>
                                    </Nav>
                                    <Nav className={"link-header"}>
                                        <Link class={"nav-link"} onClick={ () => this.logout()}>Deconnexion</Link>
                                    </Nav>
                                </> :
                                <>
                                    <Nav className={"link-header"}>
                                        <Link class={"nav-link"} to="/connexion">Connexion</Link>
                                    </Nav>
                                    <Nav className={"link-header"}>
                                        <Link class={"nav-link"} to="/inscription">Inscription</Link>
                                    </Nav>
                                </>
                            }

                            { localStorage.getItem('token') === 'okgsRGfoPBhCxWeI9U4QSx1Cs7maoyBdAkdHZNdaJKMQUs1poKVRoZyXy1np' ?
                                <>
                                    <Nav className={"link-header"}>
                                        <Link class={"nav-link"} to="/admin">Admin</Link>
                                    </Nav>
                                </> : ''

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </>
        )
    }
}

export default Header;