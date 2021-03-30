import React from 'react'

class UserInput extends React.Component {
    constructor() {
        super()
        /* 
            Creating our state object with an empty name.
            We will change the value name with our input text box.
        */
        this.state = { name: "" }
        /*
            Whenever you are dealing with user interaction like an input text box,
            you have to bind the method to the this keyword.
            If you do not do so, you will not be able to change the state object
        */ 
        this.handleChange = this.handleChange.bind(this)
    }

    /*
        This method gets called whenever the user is adding or removing
        text from the input text box. It updates the value of name
        in our state object that we created in the constructor.
    */
    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                {/* Displays the value of name in the state */}
                <h1>{this.state.name}</h1>

                {/* 
                    This is a text box that takes in the user input 
                    It calls the onChange method created above whenever
                    the user changes the value in the text box.
                */}
                <input
                    type="text"
                    placeholder="Enter first name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
            </div>
        )
    }

}

export default UserInput;