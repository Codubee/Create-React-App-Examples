import React from 'react';

function ShowArray() {

    // Create an array of javascript objects
    const people = [
        { firstName: "Din", lastName: "Djarin", age: 24 },
        { firstName: "Baby", lastName: "Yoda", age: 56 },
        { firstName: "Boba", lastName: "Fett", age: 24 }
    ]
    return (
        <div>
            <h1>Array Elements</h1>
            {
                /*
                    Call the map function on the constant created above
                    Make sure to add a div with a key or else react complains
                */
                people.map((person, id) => (
                    <div key={id}>
                        {/* 
                            Use curly braces to show the data. 
                            The person being used here comes from the map function created
                            right above
                         */}
                        <p>{person.firstName}, {person.lastName},{person.age}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default ShowArray;