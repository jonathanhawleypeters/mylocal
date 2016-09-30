import React from 'react';
import SearchBar from '../containers/SearchBar';

export default class Hero extends React.Component {

  render() {
    return (
      <div className="main-bg">
        <div className="main-bg-text">
          <h1 className="main-bg-text-hero">We Find</h1>
          <h1 className="main-bg-text-hero-blue">You Choose</h1>
          <SearchBar />
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}
