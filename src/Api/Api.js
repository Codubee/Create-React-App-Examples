import React from 'react';
import axios from 'axios'

class Api extends React.Component {

    constructor(props) {
        super(props);
        this.state = { age: '' };
    }


    componentDidMount() {

        axios.get("https://api.agify.io?name=john")
            .then((response) => {
                console.log(response);
                this.setState({
                    age: response.data.age
                })
            })
    }


    render() {
        return (
            <div>
                <h3>Expected Age: {this.state.age}</h3>
            </div>

        )
    }
}

export default Api;