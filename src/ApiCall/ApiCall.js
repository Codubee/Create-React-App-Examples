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
        this.state = { people: {} };
        /*
            When creating methods in a class component you 
            must bind the 'this' keyword to those methods
            If you do not do this step then you will not be 
            able to use the 'this' keyword in those methods
        */
        this.triggerGetApi = this.triggerGetApi.bind(this);
        this.triggerPostApi = this.triggerPostApi.bind(this);
        this.triggerDeleteApi = this.triggerDeleteApi.bind(this);
    }

    // This method gets called when the user clicks the button.
    // It is not a react lifecycle method. It can be named anything.
    // Here I named it triggerApi to make it clear what the method is doing.
    triggerGetApi() {

        // Sending a GET http request
        axios.get("http://java-sample-api-2020.herokuapp.com/getAllPeople")

            // After the request is complete we get a response. This method handles the response.
            .then((response) => {

                // Print the data to the console located in your web browser
                console.log(response.data);

                // Change the value of age in your state object
                this.setState({
                    
                    // Response.data has the data that came back from the GET http request
                    people: response.data
                })
            })
    }

    triggerPostApi(){
         // Sending a POST http request. Notice how here I had to include the body in the request
         // Remember that POST requests have a BODY
         var body = {"name":"John Cena","address":"123 cant see me"}
         axios.post("http://java-sample-api-2020.herokuapp.com/addPerson",body)

         // After the request is complete we get a response. This method handles the response.
         .then((response) => {
             // Print the data to the console located in your web browser
             console.log(response.data);
         })

    }

    triggerDeleteApi(){
         // Sending a DELETE http request. Notice that here there is no body
         // But there is a query parameter
         var queryParam = 1;
         axios.delete("http://java-sample-api-2020.herokuapp.com/deletePerson?id="+queryParam)

         // After the request is complete we get a response. This method handles the response.
         .then((response) => {
             // Print the data to the console located in your web browser
             console.log(response.data);
         })

    }

    // Render shows the user the HTML
    // It gets called second after the constructor during a components lifecycle
    render() {
        return (
            <div>
                <p>Click the right button to trigger the API youd like</p>
                <button onClick={this.triggerGetApi}>Get Request</button>
                <br></br>
                <button onClick={this.triggerPostApi}>Post Request</button>
                <br></br>
                <button onClick={this.triggerDeleteApi}>Delete Request</button>
                <br></br>
                <h2>Contents of the database are:</h2>
                {
                    Object.keys(this.state.people).map((person,idx)=>(
                        <div key={idx}>{person}: {this.state.people[person].name}, {this.state.people[person].address}</div>
                    ))
                }
                <h5>Do the get request to refresh the table after a post or delete</h5>
            </div>

        )
    }
}

// Export the component so that you can use it in other places
export default ApiCall;