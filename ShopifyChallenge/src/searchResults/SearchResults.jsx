import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetails from './components/MovieDetails.jsx';

class UnconnectedSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
  }
}
  render = () => {
      console.log("Props", this.props)
      return (
        <div>
          
              <h2 class="p-3 mb-2 text-center">
                  Search Results
              </h2>
              {this.props.queryMovie ? this.props.queryMovie.map((result, idx)=>{
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year

                  return(
                      <div key={idx}>
                          <img className="imageSmall" src={poster} />
                        <div>
                          <div>{title}</div>
                          <div>{year}</div> 
 
                           <MovieDetails title={title} />
                        </div>
                    </div>
                  )
              }):''}
            </div>

      );
    }
  };

let mapStateToProps = (state) => {
  return {
  };
};
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults);
export default SearchResults;
