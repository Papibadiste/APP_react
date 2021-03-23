import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect} from "react-router-dom";
import baseUrl from "../baseurl/BaseUrl";
import axios from "axios";


class Admin extends React.Component{

    url = new baseUrl

    constructor() {
        super()
        this.state = {
            pictures: [],
        }
    }

    componentWillMount() {
        axios.get(this.url.value + '/api/admin')
            .then(res => {
                this.setState({pictures: res.data})

            })
            .catch(error => {
                console.log(error)
            })
    }



    handleSwap = (id) => event  => {
        console.log(id)


        axios.get(this.url.value+'/api/admin/change/'+id)
            .then(res => {
                console.log('bien joué')
                axios.get(this.url.value + '/api/admin')
                    .then(res => {
                        this.setState({pictures: res.data})

                    })
                    .catch(error => {
                        console.log(error)
                    })

            })

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
                        <th scope="col">date</th>
                        <th scope="col">activer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.pictures.map((picture) =>
                        <tr>
                        <th scope="row">{ picture.title}</th>
                        <td>{ picture.note}/100</td>
                        <td>{ picture.description}</td>
                        <td>{ picture.created_at.split("T")[0]}</td>
                            <td>{ picture.is_active}</td>
                            <td> <button type="submit" className="btn btn-dark w-100 btninsco" onClick={this.handleSwap(picture.id)}>Swap</button> </td>
                        </tr>
                        )
                    }

                    </tbody>
                </table>
            </>
        )
    }
}

export default Admin;