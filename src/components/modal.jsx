import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { modal, deleteCard, renderModal } = this.props;
    if (modal) {
      return (
        <section>
          <div className="modal-container">
            <div onClick={event => event.stopPropagation()} className="modal-content bg-dark">
              <h4 className="text-center text-white">Are you sure you want to delete this card?</h4>
              <p className="text-center text-white mt-4"><strong>Q: </strong><span>{modal.question}</span></p>
              <p className="text-center text-white mb-4"><strong>A: </strong><span>{modal.answer}</span></p>
              <div className="button-container">
                <button onClick={() => deleteCard(modal)} className="btn btn-success mr-2">Confirm</button>
                <button onClick={() => renderModal(null)} className="btn btn-danger ml-2">Cancel</button>
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
