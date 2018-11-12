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
            <div>
                <input value={this.state.term}
                onChange={event => this.setState({term:event.target.value})} />
                <br />
                Value of the input: {this.state.term}
            </div>
        );
    }

    //onInputChange(event){
    //    console.log(event.target.value);
    //}
}

 export default SearchBar;