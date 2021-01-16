import React, { Component } from 'react';
import { connect } from 'react-redux';

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
removeIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  )
}
downIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
  )
}
upIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
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
              <div class='row justify-content-evenly'>
              {movies ? movies.map((result, idx)=>{
                  let rank = idx+1
                  let poster = result.Poster
                  let title= result.Title
                  let year = result.Year

                  return(
                      <div key={idx} class='col-xs-12 col-sm-6 col-md-4 col-lg-2 pb-5 '>

                        <div class='pt-3 pb-2 justify-content-center'>
                        <div class='d-flex justify-content-center'>
                          <div class='d-flex'>
                          <button               
                            onClick ={() => this.handleRankUp(result, idx)}                     
                            type="button" class="btn btn-danger">
                            {this.upIcon()}
                          </button>
                          </div>
                          <div class='d-flex'>
                          <button                       
                            onClick ={() => this.handleRemoveNominee(result)}                     
                            type="button" class="btn btn-dark">
                            {this.removeIcon()}
                          </button>
                          </div>
                          <div class='d-flex'>
                           <button                 
                            onClick ={() => this.handleRankDown(result, idx)}                     
                            type="button" class="btn btn-danger">
                            {this.downIcon()}
                          </button>
                          </div>
           
                        </div>
                        </div>               
                        <div class='d-flex justify-content-center'>
                        {poster === 'N/A' ? 
                            <div class='align-middle'>
                            <div className='noImageNomination'>
                             <div class='pt-2 pb-2'> {title}</div>
                             <div> No Image Available</div>
                            </div>
                            </div>:
                          <img className="imageNomination" src={poster} />}
                        </div>
                        <div class='text-white text-center pb-2'>
                          My #{rank} : {title} 
                        </div>
                        <div class='text-white text-center pb-2'>
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
