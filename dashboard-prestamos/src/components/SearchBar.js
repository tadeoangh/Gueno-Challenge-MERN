import React, {Component} from 'react';
import '../Search.css';
import Axios from 'axios';

class Search extends Component {

    constructor (props) {
        super(props);

        this.state = {
            result: {},
            error: null,
            isLoaded: false,
        }
    }

    fetchResults (e) {
        e.preventDefault();

        const input = document.getElementById("search-input")

        const id = input.value;

        const url = `http://localhost:3001/${id}`
        console.log(id)
        Axios.get( url )
        .then( (res) => {
            console.log(res.data)
            //const resultNotFound = ;
        })
        .catch(err => {
            if(err) {
                this.setState({
                    error: err
                })
            }
        });
    }


    render() {
        
        return(
            <div className="container">

                <h2 className="heading"> Préstamos González </h2>

                <form className="form" >
                <label className="search-label" htmlFor="search-input">
                    <input 
                        type="text"
                        id="search-input"
                        placeholder="Ingrese el DNI sin puntos ni espacios"
                    />
                </label>
                <button className="button" onClick={this.fetchResults}>
                    <i className="fas fa-search search-icon" />
                </button>
                </form>
            </div>
        )
    }
}

export default Search;