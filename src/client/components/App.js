import React, { Component } from 'react';
import NavBar from './NavBar';
import Categories from './Categories';
import HowItWorks from './HowItWorks'; 
import Footer from './Footer'; 

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Categories />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}