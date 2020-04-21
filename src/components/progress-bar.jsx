import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class ProgressBar extends Component {
  render() {
    const { progress } = this.props;
    const realProgress = progress*100;
    return(
      <React.Fragment>
        <div className="progress">
          <Progress animated bar color="warning" value={realProgress} aria-valuemin="0" aria-valuemax="100"></Progress>
        </div>
      </React.Fragment>
    )
  }
}

export default ProgressBar;
