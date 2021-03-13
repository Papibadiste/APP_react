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
import Connection from "./components/Connection";
import Inscription from "./components/Inscription";


function App() {
  return (
    <>

      <Router>
          <Header/>

      </Router>


    </>
  );
}

export default App;
