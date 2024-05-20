// Container.js
import React from 'react';
import Card from './Card';
import Schedule from './schedule';

function Container() {
  const cardsData = [
    {
      imgSrc: "/img/create.jpg",
      imgAlt: "Create Workout",
      title: "Create Workout",
      description: "Create your own personalized workout.",
      link: "Create_page.html"
    },
    {
      imgSrc: "/img/search.jpeg",
      imgAlt: "Search Workout",
      title: "Search for Workouts",
      description: "Find Pre-made workout routines fit to your goals.",
      link: "search.html"
    },
    {
      imgSrc: "/img/schedule.jpeg",
      imgAlt: "Schedule Workout",
      title: "Schedule Workouts",
      description: "Plan your workout sessions and see progress.",
      link: "schedule"
    }
  ];

  return (
    <div className="container">
      {cardsData.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </div>
  );
}

export default Container;
