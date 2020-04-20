import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between">
          <header className="ml-4 mt-3 d-flex flex-column">
            <h1>React Flash Cards</h1>
            <p><em>by Keith Tachibana</em></p>
          </header>
          <nav className="mb-4 mr-4">
            <ul className="nav nav-pills justify-content-end mt-4">
              <Link to="/">
                <li className="nav-link active mr-4">
                  View Cards
                </li>
              </Link>
              <Link to="/review">
                <li className="nav-link active mr-4">
                  Review
                </li>
              </Link>
              <Link to="/create">
                <li className="nav-link active">
                  Create Card
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
