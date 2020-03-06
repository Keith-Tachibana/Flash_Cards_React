import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    const { progress } = this.props;
    const realProgress = progress*100;
    const cssStyle = {
      'width': realProgress + '%'
    }
    return(
      <React.Fragment>
        <div className="progress">
          <div className="progress-bar" style={cssStyle} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProgressBar;
