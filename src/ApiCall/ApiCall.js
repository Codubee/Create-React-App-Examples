/*
  This component will trigger an API request when the user clicks a button
  It also uses the constructor and render lifecycle methods.
    The order that these lifecycle methods get called is 
    1. Constructor
    2. render
*/

// Import Axios to make the http request. Make sure to install it using NPM
import React from 'react';
import axios from 'axios'

// Extend React.Component
class ApiCall extends React.Component {

    // A constructor is a good place to setup inital state object
    // It is the first called method during a components lifecycle
    constructor(props) {
        super(props);
        // Creating a state object with an empty age
        this.state = { age: '' };
        /*
            When creating methods in a class component you 
            must bind the 'this' keyword to those methods
            If you do not do this step then you will not be 
            able to use the 'this' keyword in those methods
        */
        this.triggerApi = this.triggerApi.bind(this);
    }

    // This method gets called when the user clicks the button.
    // It is not a react lifecycle method. It can be named anything.
    // Here I named it triggerApi to make it clear what the method is doing.
    triggerApi() {

        // Sending a GET http request
        axios.get("https://api.agify.io?name=John")

            // After the request is complete we get a response. This method handles the response.
            .then((response) => {

                // Print the data to the console located in your web browser
                console.log(response.data);

                // Change the value of age in your state object
                this.setState({
                    
                    // Response.data has the data that came back from the GET http request
                    age: response.data.age
                })
            })
    }

    // Render shows the user the HTML
    // It gets called second after the constructor during a components lifecycle
    render() {
        return (
            <div>
                <p>Click the button to trigger the API</p>

                {/* Displays a button to the user. When clicked the triggerApi method gets called */}
                <button onClick={this.triggerApi}>Submit</button>

                {/* Display the age to the user that comes back from the API request */}
                <h3>Expected Age: {this.state.age}</h3>
            </div>

        )
    }
}

// Export the component so that you can use it in other places
export default ApiCall;