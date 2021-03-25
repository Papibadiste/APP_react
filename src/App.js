import './App.css';

import Header from "./components/Header";

import {
    BrowserRouter as Router, Route, Switch,

} from "react-router-dom";
import React from "react";
import Presentation from "./components/Welcome";
import ListeRpg from "./components/ListeRpg";
import Connection from "./components/Connection";
import Inscription from "./components/Inscription";
import NewRpg from "./components/NewRpg";
import Admin from "./components/Admin";
import Home from "./components/Home";



function App() {
  return (
    <>

      <Router>


          <Switch>

              <Route path="/presentation" component={Presentation} />
              <Route path="/listerpg" component={ListeRpg} />
              <Route path="/connexion" component={Connection} />
              <Route path="/inscription" component={Inscription} />
              <Route path="/newrpg" component={NewRpg} />
              <Route path="/admin" component={Admin} />
              <Route path="/" component={Home} />
          </Switch>

      </Router>




    </>
  );
}

export default App;
