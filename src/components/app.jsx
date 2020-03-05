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
      cards: [],
      activeCard: null
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  componentDidUpdate() {
    this.saveCards();
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
        return <ReviewCards activeCard={this.state.activeCard} setActiveCard={this.setActiveCard} cards={this.state.cards}/>;
      case 'view-cards':
        return <ViewCards cards={this.state.cards} />;
      default:
        return null;
    };
  }

  saveCards() {
    const json = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', json);
  }

  addCard(card) {
    this.setState({
      cards: this.state.cards.concat(card)
    }, this.saveCards());
  }

  setActiveCard(index) {
    const { cards } = this.state;
    let foundCard = null;
    for (let i = 0; i < cards.length; i++) {
      if (i === index) {
        foundCard = cards[i];
        console.log('Found Card:', foundCard);
      }
    }
    this.setState({
      activeCard: foundCard
    });
  }

  render() {
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
