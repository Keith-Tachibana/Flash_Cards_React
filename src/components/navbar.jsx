import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      review: false,
      create: false
    }
    this.handleClickView = this.handleClickView.bind(this);
    this.handleClickReview = this.handleClickReview.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
  }

  handleClickView() {
    const { setView } = this.props;
    this.setState({
      view: true,
      review: false,
      create: false
    }, view => setView('view-cards'));
  }

  handleClickReview() {
    const { setView } = this.props;
    this.setState({
      view: false,
      review: true,
      create: false
    }, view => setView('review-cards'));
  }

  handleClickCreate() {
    const { setView } = this.props;
    this.setState({
      view: false,
      review: false,
      create: true
    }, view => setView('create-card'));
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-title">
            <h1>Flash Cards React</h1>
            <p><em>by Keith Tachibana</em></p>
          </div>
          <ul className="nav nav-pills d-flex justify-content-end mt-4">
            <li className="nav-item">
              <a onClick={this.handleClickView} className="nav-link link active mr-2">View Cards</a>
            </li>
            <li className="nav-item">
              <a onClick={this.handleClickReview} className="nav-link link active mr-2">Review</a>
            </li>
            <li className="nav-item">
              <a onClick={this.handleClickCreate} className="nav-link link active mr-2">Create Card</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
