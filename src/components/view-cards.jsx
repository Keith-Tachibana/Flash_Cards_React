import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class ViewCards extends Component {
  render() {
    const { cards, renderModal, renderUpdate } = this.props;
    const flashCards = cards.map(card => {
      return (
        <div key={card.question} className="col mb-4">
          <div className="card h-100">
            <div className="card-body bg-dark">
              <h5 className="card-title text-light">Question:</h5>
              <p className="card-text text-white">{card.question}</p>
            </div>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light">Answer:</h5>
              <p className="card-text text-white">{card.answer}</p>
            </div>
            <div className="card-footer bg-dark text-center">
              <i className="edit text-primary fas fa-edit fa-2x mr-2" onClick={() => renderModal(card, 'update')}></i>
              <i className="delete fas fa-trash-alt fa-2x ml-2" onClick={() => renderModal(card, 'remove')}></i>
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <main className="view-container">
          <h3 className="text-center mt-4">My Cards</h3>
          <div className="row row-cols-3 row-cols-md-3">
            {flashCards}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(ViewCards);
