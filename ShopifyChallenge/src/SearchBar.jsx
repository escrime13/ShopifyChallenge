import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchTerm:""
    }
  }

  handleSearchTermChange = async (event) => {
  let searchTerm = event.target.value
  let response = await fetch('http://www.omdbapi.com/?s='+searchTerm+'&type=movie&apikey=d4af04a8')
  let movieData = await response.json() 
  let searchResults = movieData.Search
  console.log(searchResults)    
  this.props.dispatch({
      type: "queryMovie",
      queryMovie: searchResults
    });
  };
  
  render = () => {
      return (
        <div>
            <h2 class="p-3 mb-2 text-center">
                Movie Title
            </h2>
            <div>
              <input
                type="text"
                onChange={this.handleSearchTermChange}
                placeholder="Search Term"
              />
            </div>

            
        </div>
      );
    }
  };

let mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};
let SearchBar = connect(mapStateToProps)(UnconnectedSearchBar);
export default SearchBar;
