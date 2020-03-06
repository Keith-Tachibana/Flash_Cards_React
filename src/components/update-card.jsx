import React, { Component } from 'react';

import Nav from './nav';

class UpdateCard extends Component {
  render() {
    const { renderUpdate } = this.props;
    return (
      <React.Fragment>
        <main className="create-container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <form className="form">
                <h1 className="text-center mb-4">Update Card</h1>
                <fieldset>
                  <legend className="text-center">Flash Card</legend>
                  <div className="form-row justify-content-center">
                    <div className="form-group">
                      <label htmlFor="question">Question:</label>
                      <textarea name="question" className="form-control" id="question" cols="122" rows="3" required="required"></textarea>
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <div className="form-group">
                      <label htmlFor="answer">Answer:</label>
                      <textarea name="answer" className="form-control" id="answer" cols="122" rows="3" required="required"></textarea>
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <button name="save" type="submit" className="btn btn-outline-primary mr-2">Save Card</button>
                    <button name="cancel" type="reset" onClick={() => renderUpdate(null)} className="btn btn-outline-danger ml-2">Cancel</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default UpdateCard;
