import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetails from './components/MovieDetails.jsx';
import Alert from 'bootstrap/js/dist/alert';

class UnconnectedSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nominatedMovies:[]
  }
}

handleNominates = (movie)=>{
  let currentNomination = this.state.nominatedMovies
  if(currentNomination.length >4){
      return(
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          You can't nominate more than 5 movies.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      )
  }
console.log("currentNomination", currentNomination)
  let alreadyNominated = currentNomination.filter((mov)=>mov.Title === movie.Title)
  if(alreadyNominated.length > 0){
      return(
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          You have already nominated this movie!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
  }
  let newNominations = [...currentNomination, movie]
  this.setState({nominatedMovies: newNominations})
  this.props.dispatch({
    type: "nominate",
    nominate: newNominations
  });
}

  render = () => {
      let movies = this.props.queryMovie
      return (
        <div>
          
              <h2 class="p-3 mb-2 text-center">
                  Search Results
              </h2>
              {movies ? movies.map((result, idx)=>{
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
                           <button                          
                            onClick ={() => this.handleNominates(result)}                     
                            type="button" class="btn btn-primary">
                            Nominates
                          </button>
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
