import React from "react"
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import Header from "./Header";

class Home extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <>
                <Header/>
                <main class="home">
                    <Link class={"nav-link"} to="/presentation"> <img src={logo} alt="logo" className="img_home"></img> </Link>
                </main>


            </>
        )
    }
}

export default Home;