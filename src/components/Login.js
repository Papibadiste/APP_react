import React from "react"

class Login extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <>
                <form>
                    <input type="text" name="email" />
                    <input type="password" name="password" />
                </form>
            </>
        )
    }
}

export default Login;