import React, { Component } from 'react';

import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import Modal from './modal';
import UpdateCard from './update-card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: localStorage.getItem('flash-cards') ? JSON.parse(localStorage.getItem('flash-cards')) : [],
      activeCard: null,
      modal: null,
      update: null
    };
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderUpdate = this.renderUpdate.bind(this);
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
                renderModal={this.renderModal}
                setView={this.setView}
               />;
      case 'update-card':
        return <UpdateCard
                renderUpdate={this.renderUpdate}
                update={this.state.update}
               />
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

  renderModal(card) {
    this.setState({
      modal: card
    });
  }

  renderUpdate(card) {
    this.setState({
      update: card
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Nav setView={this.setView} view={this.state.view} />
          {this.getView()}
          <Modal modal={this.state.modal} renderModal={this.renderModal} deleteCard={this.deleteCard} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
