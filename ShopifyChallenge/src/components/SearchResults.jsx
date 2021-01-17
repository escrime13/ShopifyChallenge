import React, { Component} from 'react';
import { connect } from 'react-redux';
import MoviePosters from './MoviePosters.jsx'

class UnconnectedSearchResults extends Component {

starIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-star-fill" viewBox="0 0 24 24">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  )
}
unavailableIcon(){
  return(
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(188, 71, 73)" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
      </svg>
  )
}

handleDisable=(imdbID)=>{
  let currentNomination = this.props.nominations
  let alreadyNominated = currentNomination.filter((mov)=>mov.imdbID === imdbID)
  if(alreadyNominated.length > 0){
      return ("btn btn-secondary btn-lg")
  }
  return ("btn btn-warning btn-lg")
}

handleNominates = (movie)=>{
  let currentNomination = this.props.nominations
  if(currentNomination.length >4){
    return
  }
  let alreadyNominated = currentNomination.filter((mov)=>mov.imdbID === movie.imdbID)
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
            <div class="text-center">
            </div>
            <div class='container'>
            <div class='row'>
              {movies ? movies.map((result, idx)=>{
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year
                  let imdbID = result.imdbID
                  let link = "https://www.imdb.com/title/" + imdbID 
                  return(
                      <div key={idx} class='col-xs-12 col-md-4 col-lg-3'>
                        <div class='d-flex justify-content-center'>
                          <a href={link}  target="_blank">
                            {poster === 'N/A' ? 
                              <div className='noImage'> 
                               <div class='text-body pt-5 pb-3'>
                                 N/A
                               </div> 
                                {this.unavailableIcon()}
                               </div>
                            :
                              <img className="image" src={poster} />
                            }
                          </a>
                          </div>
                          <div class=" text-center">
                            <div class='text-truncate'>{title} </div>
                            <div>{' ('}{year}{')'}</div> 
                            <div class="d-flex justify-content-center" >
                              <div class='mb-2'>
                                <button 
                                    type="button" class={this.handleDisable(imdbID)}                       
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
              <div class='d-none d-sm-block'>
              <MoviePosters />
              </div>
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
