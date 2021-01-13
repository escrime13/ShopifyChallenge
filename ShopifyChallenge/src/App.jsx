import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'bootstrap/js/dist/alert';
import Header from './Header.jsx'
import Nominations from './Nominations.jsx';
import SearchBar from'./SearchBar.jsx';
import SearchResults from './searchResults/SearchResults.jsx';



class UnconnectedApp extends Component {
  render() {
    return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SearchBar />
      </div>
      <div class="d-inline-flex">
        <SearchResults queryMovie={this.props.queryMovie}/>
      </div>
      <div class="d-inline-flex">
        <Nominations nominations ={this.props.nominate}/>
      </div>
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
