import React from 'react'

function ShowObject(){
    const people = {firstName:"Luis",lastName:"Doe",age:24}
    return(
        <div>
            <h1>{people.firstName}</h1>
            <h1>{people.lastName}</h1>
            <h1>{people.age}</h1>
        </div>
    )
    
}
export default ShowObject;