import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="divider container-fluid footer">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia-jenkins</p>
            </div>
          </div>
        </div>
        <div style={{'backgroundColor': '#e0e0e0'}}>
          <ul className="nav navbar-nav footer-links">
            <li className="nav-item">
              <a className="nav-item nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-item nav-link " href="#">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-item nav-link " href="#">Sign Up</a>
            </li>
          </ul> 
        </div>
      </div>
    );
  }
}