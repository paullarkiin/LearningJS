import React from "react";
import './App.css'
//Tweet(props)
function Tweet({name, message, likes}) {
    
    // this is one way of doing it 
    // return(
    //     <div className="tweet">
    //         <h3>{props.name}</h3>
    //         <p>{props.message}</p>
    //         <h3>{props.likes}</h3>
    //     </div>
    // );

    // this is ES6 method
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{likes}</h3>
        </div>
    );
}

export default Tweet;