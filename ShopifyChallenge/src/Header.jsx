import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnconnectedHeader extends Component {

  render = () => {  
      return (
        <div>
            <div class="p-5 mt-5 text-center">
              <div className='text-shadow-pop-br'>
                <h1 className= 'tracking-in-contract'>
                  The Shoppies Awards
                  
                </h1>
              
              </div> 
              <div className='tracking-in-contract-bck-bottom'>
                 <p className='italic'>by Anne-Sophie</p> 
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
let Header = connect(mapStateToProps)(UnconnectedHeader);
export default Header;

