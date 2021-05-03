// Import react so that we can use it
import React from 'react'

// Create a class component and make sure to extend React.Component
class State extends React.Component{

    // Use the constructor to initialize your state. Make sure to pass in the props to the 
    // super constructor
    constructor(props){
        super(props)
        // Initialize your state object. Here we have a value of John
        // but it could have been an empty string as well.
        this.state = {'name':'john'}
    }

    render(){
        return(
            // Print the name value in your state object
            <h1>Hello {this.state.name}</h1>
        )
    }

}