// IMPORT REACT AND REACTDOM LIBRARIES

import React from 'react'
import ReactDOM from 'react-dom'
const label="Enter Name"
const clickme={
    text:'clickme'
}
const clickOnMe=()=>{
    return "Click me BITCH!"
}

// CREATE REACT COMPONENT
const App=()=>{
    return(<div>
            <label className="label" htmlFor="name">
                {label}
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>{clickme.text}</button>
        </div>);
};



// TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
