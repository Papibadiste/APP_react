import './App.css';

import Header from "./components/Header";

import {
    BrowserRouter as Router,

} from "react-router-dom";
import React from "react";



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
