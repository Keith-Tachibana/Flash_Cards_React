import React, { Component } from 'react';

class ReviewCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'front',
      imageIndex: 0
    };

    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.displayCard = this.displayCard.bind(this);
  }

  componentDidMount() {
    const { setActiveCard } = this.props;
    setActiveCard(0);
  }

  componentDidUpdate() {
    const { activeCard } = this.props;
    console.log('Active Card:', activeCard);
    this.displayCard();
  }

  nextCard() {
    const { cards, setActiveCard, activeCard } = this.props;
    if (activeCard === cards[cards.length - 1]) {
      setActiveCard(0);
    } else {
      const foundIndex = cards.findIndex(card => card === activeCard);
      setActiveCard(foundIndex + 1);
    }
  }

  previousCard() {
    const { cards, setActiveCard, activeCard } = this.props;
    if (activeCard === cards[0]) {
      setActiveCard(cards[cards.length - 1]);
    } else {
      const foundIndex = cards.findIndex(card => card === activeCard);
      setActiveCard(foundIndex - 1);
    }
  }

  displayCard() {
    const { cards, setActiveCard, activeCard } = this.props;
    console.log('Active Card:', activeCard);
    return this.state.side === 'front'
      ? activeCard['question']
      : activeCard['answer'];
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="text-center">Review Cards</h1>
        </header>
        <main className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="carousel">
                <i className="previous fas fa-chevron-left fa-5x" onClick={this.previousCard}></i>
                <div className="card-container">{this.props.activeCard['question']}</div>
                <i className="next fas fa-chevron-right fa-5x" onClick={this.nextCard}></i>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>

    );
  }
}

export default ReviewCards;
