import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Navbar from './navbar';
import Modal from './modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null,
      cards: localStorage.getItem('flash-cards') ? JSON.parse(localStorage.getItem('flash-cards')) : [],
      activeCard: null,
      modal: null
    };
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  componentDidUpdate() {
    this.saveCards();
  }

  saveCards() {
    const json = JSON.stringify(this.state.cards);
    localStorage.setItem('flash-cards', json);
  }

  addCard(card) {
    const { cards } = this.state;
    this.setState({
      cards: cards.concat(card)
    }, this.saveCards());
  }

  setActiveCard(index) {
    const { cards } = this.state;
    const activeCard = cards[index];
    this.setState({
      activeCard
    });
  }

  deleteCard(cardToDelete) {
    const { cards } = this.state;
    const findIndex = cards.findIndex(card => card === cardToDelete);
    const cardsCopy = [...cards];
    cardsCopy.splice(findIndex, 1);
    this.setState({
      cards: cardsCopy,
      modal: null
    }, this.saveCards());
  }

  updateCard(cardToUpdate) {
    const { cards, activeCard } = this.state;
    const findIndex = cards.findIndex(card => card === activeCard);
    const cardsCopy = [...cards];
    cardsCopy.splice(findIndex, 1, cardToUpdate);
    this.setState({
      cards: cardsCopy
    }, this.saveCards());
  }

  renderModal(card, mode) {
    this.setState({
      modal: card,
      mode
    });
    console.log('Card:', this.state.modal);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/create" exact render={props =>
              <React.Fragment>
                <Navbar />
                <CreateCard addCard={this.addCard} />
                <Modal modal={this.state.modal} mode={this.state.mode} activeCard={this.state.activeCard} updateCard={this.updateCard} renderModal={this.renderModal} deleteCard={this.deleteCard} />
              </React.Fragment>
            } />
            <Route path="/review" exact render={props =>
              <React.Fragment>
                <Navbar />
                <ReviewCards activeCard={this.state.activeCard} setActiveCard={this.setActiveCard} cards={this.state.cards} />
                <Modal modal={this.state.modal} mode={this.state.mode} activeCard={this.state.activeCard} updateCard={this.updateCard} renderModal={this.renderModal} deleteCard={this.deleteCard} />
              </React.Fragment>
            } />
            <Route path="/" exact render={props =>
              <React.Fragment>
                <Navbar />
                <ViewCards cards={this.state.cards} renderModal={this.renderModal} renderUpdate={this.renderUpdate} />
                <Modal modal={this.state.modal} mode={this.state.mode} activeCard={this.state.activeCard} updateCard={this.updateCard} renderModal={this.renderModal} deleteCard={this.deleteCard} />
              </React.Fragment>
            } />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
