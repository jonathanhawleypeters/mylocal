import React, { Component } from 'react';
import CategoryLeft from './CategoryLeft';
import CategoryRight from './CategoryRight';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.categories = [
      {
        header: "Find Restaurants",
        image: "img/restaurant-banner.jpg"
      },
      {
        header: "Find Events",
        image: "img/events-banner.jpg"
      },
      {
        header: "Find Services",
        image: "img/jobs-banner.jpg"
      },
      {
        header: "Find Volunteers",
        image: "img/community-banner.jpg",
      }
    ];
  }
  render() {
    const categories = this.categories.map((category, key) => {
      //This alternates putting the image 
      //on the right and left of the page
      //using two components
      if(key % 2 === 0){
        return <CategoryRight 
          key={category.header} 
          header={category.header} 
          image={category.image} 
        />
      } else {
        return <CategoryLeft 
          key={category.header} 
          header={category.header} 
          image={category.image}  
        />
      }
    })
    return (
      <div className="divider container-fluid">
        {categories}
      </div>
    );
  }
}