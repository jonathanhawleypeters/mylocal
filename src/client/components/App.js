import React, { Component } from 'react';
import NavBar from './Navbar';
import Hero from './Hero'; 
import Categories from './Categories'; 
import HowItWorks from './HowItWorks'; 
import Footer from './Footer'; 


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <HowItWorks />
        <Categories />
        <Footer />
      </div>
    );
  }
}