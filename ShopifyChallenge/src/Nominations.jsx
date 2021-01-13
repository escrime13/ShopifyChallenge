import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedNominations extends Component {
  render = () => {
      return (
        <div>
          <div>
            <div>
              <h2 class="p-3 mb-2 text-center">
                  Nominations
              </h2>
            </div>

          </div>
        </div>
      );
    }
  };

let mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};
let Nominations = connect(mapStateToProps)(UnconnectedNominations);
export default Nominations;
