import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { modal, deleteCard, renderModal } = this.props;
    if (modal) {
      return (
        <section>
          <div className="modal-container" onClick={this.close}>
            <div onClick={event => event.stopPropagation()} className="modal-content">
              <h4 className="text-center">Are you sure you want to delete this card?</h4>
              <p className="text-center mt-4"><strong>Q: </strong><span>{modal.question}</span></p>
              <p className="text-center mb-4"><strong>A: </strong><span>{modal.answer}</span></p>
              <div className="button-container">
                <button onClick={() => deleteCard(modal)} className="btn btn-outline-success mr-2">Confirm</button>
                <button onClick={() => renderModal(null)} className="btn btn-outline-danger ml-2">Cancel</button>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
