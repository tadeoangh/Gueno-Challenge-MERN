import React, {Component} from 'react';

class Client extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            client:{}
        }
    }


    componentDidMount() {
        console.log('Me monte')
        fetch("https://cors-anywhere.herokuapp.com/https://api.gueno.com.ar/challenge/getUserData/30111111119")
          .then(response => response.json())
          .then(
            (data) => {
              console.log(data.data)
              this.setState({
                isLoaded: true,
                client: data.data
              });
            },
            (error) => {
                console.log(error)
                this.setState({
                 isLoaded: true,
                 error
                });
            }
          )
    }
         
        render() {
            const {error,isLoaded, client} = this.state;
            if(error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (
                <div>
                    <p>{client.name} {client.surname}</p>
                    <p>{client.birthday}</p>
                </div>
                )
            }
        }
      
}



export default Client;