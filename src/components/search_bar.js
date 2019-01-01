import React, {Component} from 'react';

//const SearchBar = () => {
//    return <input />; //React.createElement
//};

// new class named searchbar with all access to react components
class SearchBar extends Component {
    constructor(props){
        super(props); //call parent methods
         
        //define states, only in class component
        this.state = {term: ''}; //only in constructor, change state like this, or use setState
    }

    //every class must have a render method
    render(){
        //return <input onChange={this.onInputChange} />;
        //setState will re-render the component
        return (
            <div className="search-bar">
                <input value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
                <br />
            </div>
        );
    }

    onInputChange(term){
        //console.log(event.target.value);
        this.setState({term});
        //fires call back function
        this.props.onSearchTermChange(term);
    }
}

 export default SearchBar;