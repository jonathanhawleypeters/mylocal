import React, { Component } from 'react';
import NavBar from './NavBar';
import Categories from './Categories';
import HowItWorks from './HowItWorks'; 
import Footer from './Footer'; 
import EventbriteSearchBar from '../containers/EventbriteSearchBar';
import EventbriteList from '../containers/EventbriteList';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <EventbriteSearchBar />
        <Categories />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}