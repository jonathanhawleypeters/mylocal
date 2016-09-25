import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <header className="navbar navbar-light navbar-fixed-top bd-navbar">
        <div className="container-fluid">
          <nav>
            <div className="clearfix">
              <button className="navbar-toggler pull-xs-right hidden-sm-up" style={{outline:'none'}} type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                ☰
              </button>
              <a className="navbar-brand hidden-sm-up" href="/">My Local</a>
            </div>
            <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
              <ul className="nav navbar-nav">
                <li className="nav-item hidden-xs-down">
                  <a className="navbar-brand" href="#">My Local</a>
                </li>
              </ul>
              <ul className="nav navbar-nav pull-sm-right">
                <li className="nav-item">
                  <a className="nav-item nav-link active"><Link to ="/search">Home</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link " href="#">Sign In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-item nav-link " href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}