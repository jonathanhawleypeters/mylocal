import React from 'react';
import SearchLocation from '../containers/SearchLocation';

export default class Location extends React.Component {

  render() {
    return (
      <div className="main-bg">
        <div className="main-bg-text">
          <h1 className="main-text">Where do you want to find restaurants?</h1>
          <hr className="hr" />
          <div className="divider"></div>
          <SearchLocation />
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}
