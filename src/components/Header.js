import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

class Header extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <>

                <Navbar class="header" bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand className={"link-header title"} href="#home">RPG</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link className={"link-header"} href="#home">Présentation</Nav.Link>
                            <Nav.Link className={"link-header"} href="#home">Liste des RPG</Nav.Link>
                            <Nav.Link className={"link-header"} href="#home">Connexion</Nav.Link>
                            <Nav.Link className={"link-header"} href="#home">Inscription</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </>
        )
    }
}

export default Header;