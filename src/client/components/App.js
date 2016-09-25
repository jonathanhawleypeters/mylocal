import React, { Component } from 'react';
import NavBar from './Navbar';
import Hero from './Hero';
import Location from './Location';
import Categories from './Categories';
import HowItWorks from './HowItWorks'; 
import Footer from './Footer'; 

export default class App extends Component {
  render() {
    //Replaced Hero with Location for testing
    return (
      <div>
        <NavBar />
        <Hero />
        <Location />
        <Categories />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}