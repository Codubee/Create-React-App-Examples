import React from 'react';
import './ClassComponent.css'


class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.counter;
        current++;
        this.setState({counter:current});
    }

    render() {
        return(
        <div>
            <h1>This button counts how many times you click it</h1>
            <button onClick={this.handleClick}>Take the shot!</button>
            <p className="someText">Times Clicked: {this.state.counter}</p>
        </div>
        )
    }
}

export default ClassComponent;