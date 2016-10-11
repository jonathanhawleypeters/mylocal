import React, { Component } from 'react';

export default class CategoryDetail extends Component {
  render() {
    return (
      <div className="row" style={{ margin: 'none' }}>
        <div className="col-lg-6 searchInfoMain">
        {console.log(this.props)}
          <h1>{ this.props.header }</h1>
          <div className="divider"></div>
          <a href="/">
          <button className="btn btn-outline-info btn-lg btn-main-custom">Search</button>
          </a>
        </div>
        <div className="col-lg-6 col-fluid">
          <img src={ this.props.image } className="img-fluid" alt="Volunteers-Banner" />
        </div>
      </div>
    );
  }
}