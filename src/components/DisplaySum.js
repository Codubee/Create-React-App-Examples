/*
    This component will serve as an example for the test
*/

import React from 'react'

class DisplaySum extends React.Component{

    constructor(){
        super()
        this.state={total:0}
        this.addOne=this.addOne.bind(this)
    }
    addOne(){
        var temp = this.state.total+1;
        this.setState({total:temp})
    }
    render(){
        return(
            <div>
                <h1>{this.state.total}</h1>
                <button onClick={this.addOne}>Add</button>
            </div>
        )
    }
}

export default DisplaySum