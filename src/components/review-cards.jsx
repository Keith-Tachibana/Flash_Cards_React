import React, { Component } from 'react';

class ReviewCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front: true,
      imageIndex: 0
    };

    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    const { setActiveCard } = this.props;
    setActiveCard(0);
  }

  nextCard() {
    const { cards, setActiveCard } = this.props;
    this.setState(() => {
      return (this.state.imageIndex === cards.length - 1)
        ? { imageIndex: 0 }
        : { imageIndex: this.state.imageIndex + 1 }
    }, setActiveCard(this.state.imageIndex));
  }

  previousCard() {
    const { cards, setActiveCard } = this.props;
    this.setState(() => {
      return (this.state.imageIndex === 0)
        ? { imageIndex: cards.length - 1 }
        : { imageIndex: this.state.imageIndex - 1 }
    }, setActiveCard(this.state.imageIndex));
  }

  showCard() {
    const { activeCard } = this.props;
    if (activeCard === null) {
      return;
    } else {
      return (
        this.state.front
          ? <React.Fragment>
              <div className="carousel bg-dark">
                <i className="previous fas fa-chevron-left fa-5x" onClick={this.previousCard}></i>
                <div className="card-wrapper" onClick={this.flipCard}>
                  <div className="card-container text-white">{activeCard.question}</div>
                </div>
                <i className="next fas fa-chevron-right fa-5x" onClick={this.nextCard}></i>
              </div>
            </React.Fragment>
          : <React.Fragment>
              <div className="carousel bg-secondary">
                <i className="previous fas fa-chevron-left fa-5x" onClick={this.previousCard}></i>
                <div className="card-wrapper" onClick={this.flipCard}>
                  <div className="card-container text-white">{activeCard.answer}</div>
                </div>
                <i className="next fas fa-chevron-right fa-5x" onClick={this.nextCard}></i>
              </div>
            </React.Fragment>
      );
    }
  }

  flipCard() {
    this.setState({
      front: !this.state.front
    });
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="text-center">Review Cards</h1>
        </header>
        <main className="container mt-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">{this.showCard()}</div>
          </div>
        </main>
      </React.Fragment>

    );
  }
}

export default ReviewCards;
