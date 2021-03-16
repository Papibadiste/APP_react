import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";


class Admin extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }




    render(){

        return (
            <>
                <table className="table table-success table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Note</th>
                        <th scope="col">description</th>
                        <th scope="col">fichier</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Admin;