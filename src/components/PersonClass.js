import React from 'react'

class PersonClass extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name} from class component</h1>
        )
    }
}

export default PersonClass;