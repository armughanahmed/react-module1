// IMPORT REACT AND REACTDOM LIBRARIES

import React from 'react'
import ReactDOM from 'react-dom'

const clickOnMe=()=>{
    return "Click me BITCH!"
}

// CREATE REACT COMPONENT
const App=()=>{
    return(<div>
            <label className="label" for="name">
                Enter Name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>{clickOnMe()}</button>
        </div>);
};



// TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
