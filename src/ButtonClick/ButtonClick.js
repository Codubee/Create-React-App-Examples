import React from 'react'

// Since we are adding more functionality we want to create a class component
class ButtonClick extends React.Component {
    constructor() {
        super()
        //Setting a default value inside of our state object
        this.state = { name: "Jane" }
        /*
            Whenever you are dealing with user interaction like a button click
            you have to bind the method to the this keyword.
            If you do not do so, you will not be able to change the state object
        */
        this.changeName = this.changeName.bind(this)
    }

    /*
        This is the method that will be called with a button click.
        It can be named anything you would like as long as it matches
        what you put with the onClick method in your button html.
    */
    changeName() {
        this.setState({ name: "John" })
    }

    render() {
        return (
            <div>
                {/* Displaying the name in the state object */}
                <h1>Hello {this.state.name}</h1>
                {/* 
                    Here is where we create the button and handle the click
                    Notice the onClick prop to the button.
                */}
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )

    }
}
export default ButtonClick;