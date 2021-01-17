import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Done from './components/Done.jsx';
import Header from './components/Header.jsx'
import Nominations from './components/Nominations.jsx';
import SearchBar from'./components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';

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
