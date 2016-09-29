import React from 'react';

export default class SearchResults extends React.Component {
  render() {
    return (
      <div className="results">
        <h2 className="searchresults-main">Search Results for Restaurants</h2>
        <input placeholder="Filter" className="inputBox filter" />
        <div className="clearfloat"></div>
        <hr />
        <div className="result">
          <div className="row">
            <div className="col-md-3">
              <img src="http://placehold.it/200x150" alt="" className="result-img img-fluid" style={{"width":"100%"}} />
              <button style={{"width":"100%"}} className="btn btn-info btn-main-custom">More Info</button>
              <button style={{"width":"100%"}} className="btn btn-outline-info btn-main-custom">Reviews</button>
            </div>
            <div className="col-md-9">
              <h3 style={{"marginTop":"20px"}}>Butlers Chocolate Cafe</h3>
              <i className="material-icons star-rating star-on">star</i>
              <i className="material-icons star-rating star-on">star</i>
              <i className="material-icons star-rating star-on">star</i>
              <i className="material-icons star-rating">star</i>
              <i className="material-icons star-rating">star</i>
              <div style={{"marginTop":"5px"}}></div>
              <i className="material-icons locationPointer">location_on</i>
              Location of the restaurant
              <hr />
              <h4>Description</h4>
              <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi....</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}