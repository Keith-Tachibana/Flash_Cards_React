import React, { Component } from 'react';

import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
  }

  setView(view) {
    this.setState({
      view
    });
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Nav setView={this.setView} />
          {this.getView()}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
