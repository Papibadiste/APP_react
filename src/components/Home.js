import React from "react"
import logo from "../img/logo.png";

class Home extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <>
                <main class="home">
                    <img src={logo} alt="logo" className="img_home"></img>
                </main>


            </>
        )
    }
}

export default Home;