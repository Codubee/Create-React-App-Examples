import React from 'react';

class ApiCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoaded: false, name: '', age: '', data: null };
        this.handleChange = this.handleChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    
    handleChange(event) { this.setState({ name: event.target.value }); }

    callApi() {

        fetch("https://api.agify.io?name=" + this.state.name)
            .then(res => res.json())
            .then(data => {
                this.setState({ age: data.age })
                console.log(data);
            })
            .catch(console.log)
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