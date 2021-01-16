import React, { Component } from 'react';
import { connect } from 'react-redux';
import Done from './Done.jsx';
import Header from './Header.jsx'
import Nominations from './Nominations.jsx';
import SearchBar from'./SearchBar.jsx';
import SearchResults from './SearchResults.jsx';



class UnconnectedApp extends Component {
  render() {
    return (
    <div class="mx-5">
      <div>
        <Header />
      </div>
      <div>
        <Nominations 
          nominations ={this.props.nominate}/>
      </div>
       {this.props.nominate.length <= 4 ? 
       <div>
     <div>
        <SearchBar /> 
      </div>
      <div>
        <SearchResults 
          queryMovie={this.props.queryMovie}
          nominations ={this.props.nominate}/>
      </div> 
      </div>: <Done />}
    </div>
    );
  }
}
let mapStateToProps = (state) => {
  console.log('state', state);
  return {
    queryMovie: state.queryMovie,
    queryDetails: state.queryDetails, 
    nominate: state.nominate,
  };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
