import React from 'react'

function ShowObject(){
    //Create a javascript object
    const person = {firstName:"Luis",lastName:"Doe",age:24}
    return(
        <div>
            <h1>Single Object</h1>
            {/*
                Use curly braces to get the data from the 
                javascript object created above
            */}
            <p>{person.firstName},{person.lastName},{person.age} </p>
        </div>
    )
    
}
export default ShowObject;