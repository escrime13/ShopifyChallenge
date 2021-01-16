
import React, { Component} from 'react';

class UnconnectedDone extends Component {
  render = () => {
      return (
        <div>
            <h2 class="text-center pt-5 pb-5">
                Your are all done! Thanks for nominating 5 movies for The Shoppies Awards!
            </h2>
            <h3 class="text-center pt-5 pb-5">
                You can still edit your choices by removing at least one of the movies you selected.
            </h3>
        </div>

      );
    }
  };
let Done = UnconnectedDone;
export default Done;
