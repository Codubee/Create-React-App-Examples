/*
    This example uses the componentDidMount lifecycle method to trigger
    an API call. It also uses the constructor and render lifecycle methods.
    The order that these lifecycle methods get called is 
    1. Constructor
    2. componentDidMount
    3. render
*/

// Import Axios to make the http request. Make sure to install it using NPM
import React from 'react';
import axios from 'axios'

// Extend React.Component
class Api extends React.Component {

    // A constructor is a good place to setup inital state object
    // It is the first called method during the a components lifecycle
    constructor(props) {
        super(props);
        // Creating a state object with an empty age
        this.state = { age: '' };
    }

    // Using the componentDidMount lifecycle method to trigger the API call.
    // This method gets called third in line after the render method.
    componentDidMount() {

        // Sending a GET http request
        axios.get("https://api.agify.io?name=john")
        // After the request is complete we get a response. This method handles the response.
            .then((response) => {

                // Print the data to the console located in your web browser
                console.log(response);

                // Change the value of age in your state object
                this.setState({
                    age: response.data.age
                })
            })
    }

    // Render shows the user the HTML
    // It gets called second after the constructor.
    render() {

        return (
            // Display the age to the user that comes back from the API request
            <div>
                <h3>Expected Age: {this.state.age}</h3>
            </div>

        )
    }
}

// Export the component so that you can use it in other places
export default Api;