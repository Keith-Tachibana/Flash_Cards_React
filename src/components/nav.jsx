import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      review: false,
      create: false
    }
    // this.renderClass = this.renderClass.bind(this);
    this.handleClickView = this.handleClickView.bind(this);
    this.handleClickReview = this.handleClickReview.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.renderClassView = this.renderClassView.bind(this);
    this.renderClassReview = this.renderClassReview.bind(this);
    this.renderClassCreate = this.renderClassCreate.bind(this);
  }

  handleClickView() {
    const { setView } = this.props;
    this.setState({
      view: true,
      review: false,
      create: false
    })
    setView('view-cards');
  }

  handleClickReview() {
    const { setView } = this.props;
    this.setState({
      view: false,
      review: true,
      create: false
    })
    setView('review-cards');
  }

  handleClickCreate() {
    const { setView } = this.props;
    this.setState({
      view: false,
      review: false,
      create: true
    })
    setView('create-card');
  }

  /*
  renderClass() {
    const { view } = this.props;
    console.log('View:', view);
    let cssClass = null;
    switch(view) {
      case 'create-card':
        cssClass = "nav-link link active";
        break;
      case 'review-cards':
        cssClass = "nav-link link active";
        break;
      case 'view-cards':
        cssClass = "nav-link link active";
        break;
      default:
        cssClass = "nav-link link";
        break;
    };
    return cssClass;
  }
  */

  renderClassView() {
    if (this.state.view) {
      return "nav-link link active";
    } else {
      return "nav-link link";
    }
  }

  renderClassReview() {
    if (this.state.review) {
      return "nav-link link active";
    } else {
      return "nav-link link";
    }
  }

  renderClassCreate() {
    if (this.state.create) {
      return "nav-link link active";
    } else {
      return "nav-link link";
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className="nav nav-pills justify-content-end mt-4">
            <li className="nav-item">
              <a onClick={this.handleClickView} className={this.renderClassView()}>View Cards</a>
            </li>
            <li className="nav-item">
              <a onClick={this.handleClickReview} className={this.renderClassReview()}>Review</a>
            </li>
            <li className="nav-item">
              <a onClick={this.handleClickCreate} className={this.renderClassCreate()}>Create Card</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
