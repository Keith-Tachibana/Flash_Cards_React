import React, { Component } from 'react';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addCard } = this.props;
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    };
    addCard(newCard);
    this.clearFields();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.clearFields();
  }

  clearFields() {
    const { setView } = this.props;
    const clearFields = {
      question: '',
      answer: ''
    };
    this.setState(clearFields);
    setView('view-cards');
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center mb-4">Create New Card</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend className="text-center">Flash Card</legend>
            <div className="form-row justify-content-center">
              <div className="form-group">
                <label htmlFor="question">Question:</label>
                <textarea name="question" onChange={this.handleChange} className="form-control" id="question" cols="90" rows="3"></textarea>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group">
                <label htmlFor="answer">Answer:</label>
                <textarea name="answer" onChange={this.handleChange} className="form-control" id="answer" cols="90" rows="3"></textarea>
              </div>
            </div>
          </fieldset>
          <div className="form-row justify-content-end w-75">
            <button name="save" type="submit" className="btn btn-outline-primary mr-2">Save Card</button>
            <button name="cancel" type="reset" onClick={this.handleReset} className="btn btn-outline-danger ml-2">Cancel</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateCard;
