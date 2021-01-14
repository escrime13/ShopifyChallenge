import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedHeader extends Component {
  render = () => {
      return (
        <div>
            <h1 class="p-3 mt-5 mb-2 text-center text-white">
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

