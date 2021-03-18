import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect} from "react-router-dom";


class Admin extends React.Component{
    constructor() {
        super()
        this.state = {

        }
    }




    render(){
        if(localStorage.getItem('token') !== 'okgsRGfoPBhCxWeI9U4QSx1Cs7maoyBdAkdHZNdaJKMQUs1poKVRoZyXy1np') {
            return (<Redirect to={"/listerpg"}/>)
        }

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