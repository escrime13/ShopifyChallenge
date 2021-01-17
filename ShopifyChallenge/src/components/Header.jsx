import React, { Component } from 'react';

class UnconnectedHeader extends Component {

  render = () => {  
      return (
        <div>
            <div class="pt-3 text-center">
              <div className='text-shadow-pop-br'>
                <h1 className= 'text-shadow-pop-br'>
                  The Shoppies Awards
                </h1>
              </div> 
              <div className='scale-in-ver-top'>
                 <p className='italic'>by Anne-Sophie</p> 
              </div> 
            </div>
        </div>
      );
    }
  };

let Header = UnconnectedHeader;
export default Header;

