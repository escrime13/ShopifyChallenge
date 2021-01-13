import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedSearchResults extends Component {

    getDetails= async(title)=>{
        let response = await fetch('http://www.omdbapi.com/?t='+title+'&type=movie&plot=full&apikey=d4af04a8')
        let movieDetails = await response.json()
        console.log("MovieDetails", movieDetails)
        this.props.dispatch({
            type:"movieDetails",
            queryDetails: movieDetails
        })
    }

  render = () => {
      console.log("Props", this.props)
      return (
        <div>
          
              <h2 class="p-3 mb-2 text-center">
                  Search Results
              </h2>
              {this.props.queryMovie ? this.props.queryMovie.map((result)=>{
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year

                  return(
                      <div>
                          <img className="imageSmall" src={poster} />
                        <div>
                          <div>{title}</div>
                          <div>{year}</div> 
                          <button 
                            onClick ={() =>
                                this.getDetails(title)
                              }
                            >
                                Details
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
