import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { updateCard, renderModal } = this.props;
    updateCard(this.state);
    renderModal(null);
  }

  render() {
    const { modal, deleteCard, renderModal, mode } = this.props;
    if (modal && (mode === 'update')) {
      return (
        <React.Fragment>
          <section className="modal-container">
            <div className="row modal-content bg-dark">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <form className="form" onSubmit={this.handleSubmit}>
                  <h1 className="text-center text-white mb-4">Update Card</h1>
                  <div className="form-row d-flex justify-content-center">
                    <div className="form-group">
                      <label htmlFor="question" className="text-white">Question:</label>
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
                  <div className="form-row d-flex justify-content-center">
                    <div className="form-group">
                      <label htmlFor="answer" className="text-white">Answer:</label>
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
                  <div className="form-row d-flex justify-content-center mt-4">
                    <button
                      name="save"
                      type="submit"
                      className="btn btn-primary mr-2">
                      Save Card
                      </button>
                    <button
                      name="cancel"
                      type="reset"
                      onClick={() => renderModal(null)}
                      className="btn btn-danger ml-2">
                      Cancel
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else if (modal && (mode === 'remove')) {
      return (
        <React.Fragment>
          <section>
            <div className="modal-container">
              <div onClick={event => event.stopPropagation()} className="modal-content bg-dark">
                <h4 className="text-center text-white">Are you sure you want to delete this card?</h4>
                <p className="text-center text-white mt-4"><strong>Q: </strong><span>{modal.question}</span></p>
                <p className="text-center text-white mb-4"><strong>A: </strong><span>{modal.answer}</span></p>
                <div className="button-container mt-4">
                  <button onClick={() => deleteCard(modal)} className="btn btn-success mr-2">Confirm</button>
                  <button onClick={() => renderModal(null)} className="btn btn-danger ml-2">Cancel</button>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Modal);
