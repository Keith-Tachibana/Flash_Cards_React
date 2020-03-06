import React, { Component } from 'react';

class ViewCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const { cards, activeCard, deleteCard } = this.props;
    console.log('Active Card:', activeCard);
    console.log('Delete Card:', deleteCard);
    if (this.state.isOpen) {
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
                <i className="delete fas fa-trash-alt fa-2x" onClick={this.open}></i>
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
          <section>
            <div className="modal-container" onClick={this.close}>
              <div onClick={event => event.stopPropagation()} className="modal-content">
                <h4 className="text-center">Are you sure you want to delete this card?</h4>
                <p className="text-center mt-4"><strong>Q: </strong><span>{activeCard === null ? null : activeCard.question}</span></p>
                <p className="text-center mb-4"><strong>A: </strong><span>{activeCard === null ? null : activeCard.answer}</span></p>
                <div className="button-container">
                  <button className="btn btn-outline-success mr-2">Confirm</button>
                  <button onClick={this.close} className="btn btn-outline-danger ml-2">Cancel</button>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
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
                <i className="delete fas fa-trash-alt fa-2x" onClick={this.open}></i>
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
}

export default ViewCards;
