// IMPORT REACT AND REACTDOM LIBRARIES

import React from 'react'
import ReactDOM from 'react-dom'



// CREATE REACT COMPONENT
const App=()=>{
    return <div>Hello there</div>
};



// TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
