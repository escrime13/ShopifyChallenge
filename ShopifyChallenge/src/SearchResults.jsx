import React, { Component} from 'react';
import { connect } from 'react-redux';
import MovieCarousel from './MovieCarousel.jsx'

class UnconnectedSearchResults extends Component {
  constructor(props) {
    super(props);
}


handleNominates = (movie)=>{
  let currentNomination = this.props.nominations
  if(currentNomination.length >4){
    return
  }
console.log("currentNomination", currentNomination)
  let alreadyNominated = currentNomination.filter((mov)=>mov.Title === movie.Title)
  if(alreadyNominated.length > 0){
      return
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

            <div className="containerSearch">
              <h2 class=" text-center pt-3 pb-3">
                  Search Results
              </h2>
            <div class="text-center">
            </div>
            <div class='container'>
            <div class='row'>
              {movies ? movies.map((result, idx)=>{
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year
                  let imdbId = result.imdbID
                  let link = "https://www.imdb.com/title/" + imdbId 

                  return(
                      <div key={idx} class='col-xs-12 col-sm-6 col-lg-3'>
                          <div class='p-2 mt-2'>
                          <a href={link}  target="_blank">
                            {poster === 'N/A' ? 
                            <div class='align-middle'>
                            <div className='noImage'>
                             <div class='pt-2 pb-2'> {title}</div>
                             <div> No Image Available</div>
                            </div>
                            </div>:
                            <div className='imageContainer'>
                              <img className="imageSmall" src={poster} />
                            </div>
                            }
                            </a>
                          </div>
                          <div class=" text-center">
                            <div>{title} {' ('}{year}{')'}</div> 
        
                            <div class="d-flex justify-content-center" >

                              <div>
                                
                                <button 
                                    type="button" class="btn btn-warning btn-lg"                        
                                    onClick ={() => this.handleNominates(result)}                     
                                  >
                                  Nominate
                              </button>
                              </div>
                            </div>
                         
                        </div>
                        <div>
                        </div>
                    </div>
                  )
              }):''}
              </div>
              </div>
              </div>
              <MovieCarousel />
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
