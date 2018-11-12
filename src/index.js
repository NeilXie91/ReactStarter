import React from 'react';
import ReactDOM from 'react-dom';
//for library, no need to specify the path because it's unique
//for import from file, need to specify path because files can be multiple with same name
import SearchBar from './components/search_bar';

// Youtube api key
const API_KEY = 'AIzaSyAXjJuo7hdayJ-e9Md9Ki3YYJJqMso2Ve0';

//create a new component whcih will generate HTML 
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'))