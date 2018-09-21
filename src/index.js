import React from 'react';
import ReactDOM from 'react-dom';

// Youtube api key
const API_KEY = 'AIzaSyAXjJuo7hdayJ-e9Md9Ki3YYJJqMso2Ve0';

//create a new component whcih will generate HTML 
const App = () => {
    return <div>My first react app!</div>;
}

//take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'))