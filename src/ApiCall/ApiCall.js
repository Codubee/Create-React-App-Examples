import React from 'react';
import axios from 'axios'

class ApiCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', age: '' };
        this.triggerApi = this.triggerApi.bind(this);
    }

    triggerApi() {

        axios.get("https://api.agify.io?name=John")
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
                <p>Click the button to trigger the API</p>
                <button onClick={this.triggerApi}>Submit</button>
                <h3>Expected Age: {this.state.age}</h3>
            </div>

        )
    }
}

export default ApiCall;