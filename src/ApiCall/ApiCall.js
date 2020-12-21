import React from 'react';
import axios from 'axios'

class ApiCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', age: '' };
        this.handleChange = this.handleChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }

    handleChange(event) { this.setState({ name: event.target.value }); }

    callApi() {

        axios.get("https://api.agify.io?name=" + this.state.name)
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
                <p>What is your name:</p>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <button onClick={this.callApi}>Submit</button>
                <h3>Expected Age: {this.state.age}</h3>
            </div>

        )
    }
}

export default ApiCall;