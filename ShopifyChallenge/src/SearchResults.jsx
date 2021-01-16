import React, { Component} from 'react';
import { connect } from 'react-redux';
import MovieCarousel from './MovieCarousel.jsx'

class UnconnectedSearchResults extends Component {
  constructor(props) {
    super(props);
}


starIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-star-fill" viewBox="0 0 24 24">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  )
}
unavailableIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="rgb(188, 71, 73)" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
    </svg>
  )
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
                            <div class='text-center'>
                            <div className='noImage'>
                             <h3 class='pt-2 pb-2 text-body'> {title}</h3>
                             <div>{this.unavailableIcon()}</div>
                             <h3 class='text-body'>Image</h3>
                             <h3 class='text-body'>Unavailable</h3>
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
                                      {this.starIcon()}                   
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
