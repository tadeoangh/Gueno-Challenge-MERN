import React, {Component} from 'react';
import '../Search.css';
import Axios from 'axios';

class Search extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            result: false,
            error: null,
        }

        this.fetchResults = this.fetchResults.bind(this)
    }

    fetchResults (e) {
        e.preventDefault();

        this.setState({
            isLoading: true
        })

        const input = document.getElementById("search-input")

        const id = input.value;

        const url = `http://localhost:3001/${id}`

        console.log("yendo");

        Axios.get( url )
        .then(
            
            (res) => {
                console.log(res)
                this.setState({
                    result: res.data,
                    isLoading: false
                })
            },

            (error) => {
                this.setState({
                    isLoading: false,
                    error: error,
                })
            }
        );
    }


    render() {

        let {result, error, isLoading} = this.state;

        if (isLoading) {
            return(
                <div className="container">
    
                    <h2 className="heading"> Préstamos González </h2>
    
                    <form className="form" >

                        <div className="input-group mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="search-input"
                            placeholder="Ingrese el DNI sin puntos ni espacios"
                        />
                        <button className="button btn btn-light" onClick={this.fetchResults}>
                        <i className="fas fa-search search-icon" />
                        </button>
                        </div>
                    
                    </form>
    
                    <div>
                        <p>Cargando...</p>
                    </div>
                </div>
            )
        } else if (error) {
            return <div>Ha ocurrido un error: {error.message}</div>;
        } else if (!result || result.data === "Hello. Welcome") {
            return(
                <div className="container">
    
                    <h2 className="heading"> Préstamos González </h2>
    
                    <form className="form" >

                        <div className="input-group mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="search-input"
                            placeholder="Ingrese el DNI sin puntos ni espacios"
                        />
                        <button className="button btn btn-light" onClick={this.fetchResults}>
                        <i className="fas fa-search search-icon" />
                        </button>
                        </div>
                    
                    </form>
    
                    <div>
                        <p>Bienvenid@</p>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="container">
    
                    <h2 className="heading"> Préstamos González </h2>
    
                     <form className="form" >
                        
                        <div className="input-group mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="search-input"
                            placeholder="Ingrese el DNI sin puntos ni espacios"
                        />
                        <button className="button btn btn-light" onClick={this.fetchResults}>
                        <i className="fas fa-search search-icon" />
                        </button>
                        </div>
                    
                     </form>
    

                     <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Nombre completo:</b> {result.fullname}</li>
                        <li className="list-group-item"><b>Fecha de nacimiento:</b> {result.birthday}</li>
                        <li className="list-group-item"><b>CUIT:</b> {result.cuit}</li>
                        <li className="list-group-item"><b>Scoring:</b> {result.scoring}</li>
                     </ul>

                </div>
            )
        }
        
    }
}

export default Search;