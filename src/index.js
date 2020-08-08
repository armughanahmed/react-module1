// IMPORT REACT AND REACTDOM LIBRARIES

import React from 'react'
import ReactDOM from 'react-dom'



// CREATE REACT COMPONENT
const App=()=>{
    return(<div>
            <label class="label" for="name">
                Enter Name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:"blue", color:"white"}}>Submit</button>
        </div>);
};



// TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
