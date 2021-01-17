
import React, { Component} from 'react';

class UnconnectedDone extends Component {
  render = () => {
      return (
        <div>
            <h3 class="text-center pt-5">
                Your are all done! Thanks for nominating 5 movies for The Shoppies Awards!
            </h3>
            <h4 class="text-center pt-5">
                You can still edit your choices by removing at least one of the movies you selected.
            </h4>
        </div>

      );
    }
  };
let Done = UnconnectedDone;
export default Done;
