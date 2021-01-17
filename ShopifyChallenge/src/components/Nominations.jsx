import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedNominations extends Component {
  constructor(props) {
    super(props);
    this.state={
      nominatedMovies: []
    }
}
  
  handleRemoveNominee=(movie)=>{
    let nominations = this.props.nominations
    let culledNominations = nominations.filter((nominee)=>nominee.Title !== movie.Title)
    this.props.dispatch({
      type: "nominate",
      nominate: culledNominations
    });
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
    let length = nominations.length
    let newPosition = idx+1
    if (newPosition === length) return
    nominations.splice(idx, 1)
    nominations.splice(newPosition, 0, movie)
    this.setState({nominatedMovies: nominations})
    this.props.dispatch({
      type: "nominate",
      nominate: nominations
    });
  }

downIcon(idx){
  let length = this.props.nominations.length
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={ idx+1 !==length ? "rgb(188, 71, 73)":"#6c757d" } class="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
  )
}
removeIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    </svg>
  )
}
trophyIcon(){
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFC107" class="bi bi-trophy-fill" viewBox="0 0 16 16">
        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
      </svg>
    </div>
  )
}

unavailableIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(188, 71, 73)" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
    </svg>
  )
}
upIcon(idx){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={idx !==0 ? "rgb(188, 71, 73)":"#6c757d" } class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg>
  )
}

  render = () => {
    let movies = this.props.nominations
      return (
        <div>
          <div>
            <div class='container'>
              <div class='row justify-content-evenly backgroundNomination'>
              {movies ? movies.map((result, idx)=>{
                  let rank = idx+1
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year
                  return(
                      <div key={idx} class='col-xs-12 col-sm-6 col-md-4 col-lg-2 pt-2 pb-2 '>
                        <div class='pt-1 pb-1 justify-content-center'>
                         <div class='d-flex justify-content-center text-body text-bold pb-1'>
                           {this.trophyIcon()}
                           <h3 className='rank'>#{rank}</h3>
                         </div>
                         <div class='d-flex justify-content-center'>
                          {poster === 'N/A' ? 
                              <div class='align-middle'>
                              <div className='noImageNomination'>
                               <div>{this.unavailableIcon()}</div>
                              </div>
                              </div>:
                            <img className="imageNomination" src={poster} />}
                          </div>
                         <div class='d-flex justify-content-center'> 
                          <div class='d-flex'>
                            <button               
                              onClick ={() => this.handleRankUp(result, idx)}                     
                              type="button" class="btn btn-link">
                              {this.upIcon(idx)}
                            </button>
                          </div>
                          <div class='d-flex'>
                            <button                       
                              onClick ={() => this.handleRemoveNominee(result)}                     
                              type="button" class="btn btn-link">
                              {this.removeIcon()}
                            </button>
                          </div> 
                          <div class='d-flex'>
                            <button                 
                              onClick ={() => this.handleRankDown(result, idx)}                     
                              type="button" class="btn btn-link">
                              {this.downIcon(idx)}
                            </button>
                          </div>
                         </div>
                        </div> 
                        <div class='text-center text-body text-bold'>
                          {title} 
                        </div>
                        <div class='text-center text-body text-bold pb-2'>
                          {' ('}{year}{')'}
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
