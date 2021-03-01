import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Presentation from "./components/Welcome";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import ListeRpg from "./components/ListeRpg";


function App() {
  return (
    <>
      <Header/>
      <Router>
          <Navbar class="header" bg="dark" expand="lg" variant="dark">
              <Navbar.Brand className={"link-header "} ><Link class={"navbar-brand title"} to="/">RPG</Link></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                  <Nav className="mr-auto">
                      <Nav className={"link-header"}> <Link class={"nav-link"} to="/presentation">Présentation</Link> </Nav>
                      <Nav className={"link-header"}> <Link class={"nav-link"} to="/listerpg">Liste des RPG</Link> </Nav>
                      <Nav className={"link-header"}> <Link class={"nav-link"} to="/connexion">Connexion</Link> </Nav>
                      <Nav className={"link-header"}> <Link class={"nav-link"} to="/inscription">Inscription</Link> </Nav>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Switch>

              <Route path="/presentation" component={Presentation} />
              <Route path="/listerpg" component={ListeRpg} />
              <Route path="/" component={Home} />
          </Switch>
      </Router>


    </>
  );
}

export default App;
