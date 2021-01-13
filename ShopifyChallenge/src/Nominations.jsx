import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetails from './searchResults/components/MovieDetails.jsx';

class UnconnectedNominations extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nominatedMovies:[]
  }
}
  
  
  handleRemoveNominee=(movie)=>{
    console.log("remove")
    let nominations = this.props.nominations
    console.log("nominations", nominations)
    let culledNominations = nominations.filter((nominee)=>nominee.Title !== movie.Title)
    console.log("culledNominations", culledNominations)
    this.setState({nominatedMovies: culledNominations})
    this.props.dispatch({
      type: "nominate",
      nominate: culledNominations
    });
    console.log('remove nominee')
  }

  render = () => {
    let movies = this.props.nominations
      return (
        <div>
          <div>
            <div>
              <h2 class="p-3 mb-2 text-center">
                  Nominations
              </h2>
              {movies ? movies.map((result, idx)=>{
                  let rank = idx+1
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year

                  return(
                      <div key={idx}>
                        <div>
                          {rank}
                        </div>
                          <img className="imageSmall" src={poster} />
                        <div>
                          <div>{title}</div>
                          <div>{year}</div> 
 
                           <MovieDetails title={title} />
                           <button                          
                            onClick ={() => this.handleRemoveNominee(result)}                     
                            type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Remove
                          </button>
                        </div>
                    </div>
                  )
              }):''}

            </div>

          </div>
        </div>
      );
    }
  };

let mapStateToProps = (state) => {
  return {
  };
};
let Nominations = connect(mapStateToProps)(UnconnectedNominations);
export default Nominations;
