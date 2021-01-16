import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCarousel from './MovieCarousel.jsx'

class UnconnectedHeader extends Component {
  render = () => {
      return (
        <div>
            <h1 class="p-5 mt-5 mb-5 text-center">
                The Shoppies
            </h1>
        </div>
      );
    }
  };

let mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};
let Header = connect(mapStateToProps)(UnconnectedHeader);
export default Header;

