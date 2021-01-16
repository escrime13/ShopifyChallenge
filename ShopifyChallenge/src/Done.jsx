
import React, { Component} from 'react';
import { connect } from 'react-redux';

class UnconnectedDone extends Component {
  constructor(props) {
    super(props);
}

  render = () => {
      return (
        <div>
            <h2 class="text-center pt-5 pb-5">
                Your are all done! Thanks for nominating 5 movies for The Shoppies Awards!
            </h2>

            <h3 class="text-center pt-5 pb-5">
                You can still edit your choices by removing one of your current pick.
            </h3>
        </div>

      );
    }
  };

let mapStateToProps = (state) => {
  return {
  };
};
let Done = connect(mapStateToProps)(UnconnectedDone);
export default Done;
