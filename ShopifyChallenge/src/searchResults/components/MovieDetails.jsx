import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedMovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:[], 
      }
    }
    getDetails= async(title)=>{
        let response = await fetch('http://www.omdbapi.com/?t='+title+'&type=movie&plot=full&apikey=d4af04a8')
        let movieDetails = await response.json()
        this.setState({details: movieDetails})
        console.log('this.state', this.state)
        if(movieDetails !== undefined)
        return(
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">{movieDetails.Title} {movieDetails.Year}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <img className="imageLarge" src={movieDetails.Poster} />
                    {/*<div>{ratings ? ratings.map((rating)=>{

                    }) : 'N/A'}</div>*/}

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                      onClick={()=>this.setState({details:[]})
                      }
                      >Close</button>
                    </div>
                  </div>
                </div>
              </div>

        )
    }

  render = () => {
      let details = this.state.details
      let actors = details.Actors
      let awards = details.Awards
      let boxOffice = details.BoxOffice
      let country = details.Country
      let director = details.Director
      let genre = details.Genre
      let language = details.Language
      let plot = details.Plot
      let poster = details.Poster
      let production = details.Production
      let rated = details.rated
      let ratings = details.Ratings
      let released = details.released
      let runtime = details.Runtime
      let title = details.Title
      let writer = details.Writer
      let year = details.Year
      
               return (
            <div>
                <button                          
                onClick ={() => this.getDetails(this.props.title)}                     
                type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Details
              </button>
              
              </div>

      ); 

    }
  };

let mapStateToProps = (state) => {
  return {
  };
};
let MovieDetails = connect(mapStateToProps)(UnconnectedMovieDetails);
export default MovieDetails;
