import React, { Component } from 'react';
import NavBar from './NavBar'; 
import Footer from './Footer'; 

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
<<<<<<< 7d614feef5a0a643094e3dd22f623c1478beabb2
        <EventbriteSearchBar />
        <Categories />
        <HowItWorks />
=======
>>>>>>> restructured react router
        <Footer />
      </div>
    );
  }
}