import React, { Component } from 'react';

class ViewCards extends Component {
  render() {
    const { cards } = this.props;
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
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <header>
          <h1 className="text-center mb-4">My Cards</h1>
        </header>
        <main>
          <div className="row row-cols-3 row-cols-md-3">
            {flashCards}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default ViewCards;
