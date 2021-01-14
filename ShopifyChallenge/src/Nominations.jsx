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

  handleRankUp=(movie, idx)=>{
    if (idx ===0) return
    let newPosition = idx-1
    let nominations = this.props.nominations
    nominations.splice(idx, 1)
    nominations.splice(newPosition, 0, movie)
    this.setState({nominatedMovies: nominations})
    this.props.dispatch({
      type: "nominate",
      nominate: nominations
    });
  }

  handleRankDown=(movie, idx)=>{
    let nominations = this.props.nominations
    let newPosition = idx+1
    if (newPosition===nominations.length) return
    nominations.splice(idx, 1)
    nominations.splice(newPosition, 0, movie)
    this.setState({nominatedMovies: nominations})
    this.props.dispatch({
      type: "nominate",
      nominate: nominations
    });
  }

  render = () => {
    let movies = this.props.nominations
      return (
        <div>
          <div>
            <div className="containerSearch">
              <h2 class="text-white text-center pt-5 pb-5">
                  Nominations
              </h2>
              <div class="text-white text-center">
              {movies ? movies.map((result, idx)=>{
                  let rank = idx+1
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year

                  return(
                      <div key={idx} >
                        <div class='pt-5'>
                          My #{rank}
                        </div>
                          <img className="imageSmall" src={poster} />
                        <div>
                        <div class='pb-2'>{title} {' ('}{year}{')'}</div>
                        <div class='pb-2'>
                           <button  
                                               
                            onClick ={() => this.handleRemoveNominee(result)}                     
                            type="button" class="btn btn-dark">
                            Remove
                          </button>
                        </div>
                        <div class='pb-2'>
                           <button               
                            onClick ={() => this.handleRankUp(result, idx)}                     
                            type="button" class="btn btn-danger">
                            RankUp
                          </button>
                        </div>
                        <div class='pb-2'>
                           <button                 
                            onClick ={() => this.handleRankDown(result, idx)}                     
                            type="button" class="btn btn-danger">
                            RankDown
                          </button>
                        </div>
                        </div>
                    </div>
                   
                  )
              }):''}
              </div>
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
