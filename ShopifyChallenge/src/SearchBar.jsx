import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedSearchBar extends Component {

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
            <h3 class="p-3 mt-5 mb-3 text-center">
              Nominate your favorite movies for a Shoppies award!
            </h3>
            <h4 class="p-3 mb-2 text-center">
               You can nominate up to 5 different movies!
               Use the search bar below to find your favorite movies!
            </h4>

            <h3 class=" mb-5 text-center">
              <input
                class="text-center"
                type="text"
                onChange={this.handleSearchTermChange}
                placeholder="Movie Title"
              />
            </h3>

            
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
