import React, { Component } from 'react';

import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(view) {
    this.setState({
      view
    });
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    };
  }

  componentDidUpdate() {
    this.saveCards();
  }

  saveCards() {
    const json = JSON.stringify(this.state.cards);
    console.log('JSON:', json);
    localStorage.setItem('flash-cards', json);
  }

  addCard(card) {
    this.setState({
      cards: this.state.cards.concat(card)
    }, this.saveCards());
  }

  render() {
    console.log('Cards From App:', this.state.cards);
    return (
      <React.Fragment>
        <div>
          <Nav setView={this.setView} view={this.state.view} />
          {this.getView()}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
