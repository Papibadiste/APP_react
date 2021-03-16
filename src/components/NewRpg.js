import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";


class NewRpg extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }




    render(){

        return (
            <>
                <div className={"container-fluid"}>
                    <div className={"row "} >
                        <div className={"col-6 offset-3 card-list mt-2 inscritiontext"} >
                            <h2 className={"listerpg-tittle"}>Proposer un jeu</h2>
                            <form className={ "p-4 " }>
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="name">Nom du jeu:</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="First name" id={"name"}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="note">Note:</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="Last name" id={"note"}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Example textarea</label>
                                    <textarea className="form-control" id="description" rows="10"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                                    <input type="file" className="form-control-file text_input_file" id="exampleFormControlFile1"/>
                                </div>
                                <button type="submit" className="btn btn-dark btninsco">Evoyer la proposition</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewRpg;