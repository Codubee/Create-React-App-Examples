import React from 'react';

function ConditionalRender(props){

    if(props.loggedIn === "true")
        return <h1>Logged In</h1>

    else
        return <h1>Not Logged In</h1>
}

export default ConditionalRender;