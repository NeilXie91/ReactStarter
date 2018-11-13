import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//for library, no need to specify the path because it's unique

import YTSearch from 'youtube-api-search'

//for import from file, need to specify path because files can be multiple with same name
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// Youtube api key
const API_KEY = 'AIzaSyAXjJuo7hdayJ-e9Md9Ki3YYJJqMso2Ve0';

//create a new component whcih will generate HTML 
class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos:[]};

        YTSearch({key: API_KEY, term: 'itsRae'}, (videos) => {
            this.setState({ videos }); //equals to this. setState({videos:videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} /> 
            </div>
        );
    }
}

//take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'))