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
      cards: localStorage.getItem('flash-cards') ? JSON.parse(localStorage.getItem('flash-cards')) : [],
      activeCard: null,
      modal: null
    };
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
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
        return <CreateCard
                addCard={this.addCard}
                setView={this.setView}
               />;
      case 'review-cards':
        return <ReviewCards
                activeCard={this.state.activeCard}
                setActiveCard={this.setActiveCard}
                cards={this.state.cards}
               />;
      case 'view-cards':
        return <ViewCards
                cards={this.state.cards}
                activeCard={this.state.activeCard}
                setActiveCard={this.setActiveCard}
                deleteCard={this.deleteCard}
               />;
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
    const activeCard = cards[index];
    this.setState({
      activeCard
    });
    console.log('Active Card:', activeCard);
  }

  deleteCard(deletedCard) {
    const oldCards = this.state.cards;
    const deletedCardIndex = oldCards.findIndex(card => deletedCard === card);
    const newCards = [...oldCards];
    newCards.splice(deletedCardIndex, 1);
    this.setState({ cards: newCards, modal: null }, () => this.saveCards());
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
