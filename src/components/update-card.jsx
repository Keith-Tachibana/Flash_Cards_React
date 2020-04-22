import React, { Component } from 'react';

class UpdateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.activeCard.question,
      answer: this.props.activeCard.answer
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearFields = this.clearFields.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const { updateCard } = this.props;
    updateCard(this.state);
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
        <main className="create-container">
          <div className="row m-auto">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <form className="form update-form" onSubmit={this.handleSubmit}>
                <h2 className="text-center my-4 my-cards">Update Card</h2>
                <div className="form-row justify-content-center">
                  <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <textarea
                      name="question"
                      className="form-control"
                      id="question"
                      cols="122"
                      rows="3"
                      required="required"
                      value={this.state.question}
                      onChange={this.handleChange}>
                    </textarea>
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <div className="form-group">
                    <label htmlFor="answer">Answer:</label>
                    <textarea
                      name="answer"
                      className="form-control"
                      id="answer"
                      cols="122"
                      rows="3"
                      required="required"
                      value={this.state.answer}
                      onChange={this.handleChange}>
                    </textarea>
                  </div>
                </div>
                <div className="form-row justify-content-center mb-4">
                  <button
                    name="save"
                    type="submit"
                    className="btn btn-primary mr-2">
                    Save Card
                  </button>
                  <button
                    name="cancel"
                    type="reset"
                    onClick={this.handleReset}
                    className="btn btn-danger ml-2">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default UpdateCard;
