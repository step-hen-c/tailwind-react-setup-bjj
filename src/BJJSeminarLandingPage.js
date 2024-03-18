import React, { useState, useEffect } from 'react'; 
import SeminarCard from './SeminarCard';

const BJJSeminarLandingPage = () => {
  const seminar = {
    imageSrc: "path/to/seminar-image.jpg",
    imageAlt: "Seminar on Leadership Skills",
    title: "Mastering Leadership Skills",
    dateTime: "July 15, 2024 | 9:00 AM - 4:00 PM",
    venue: "Conference Center",
    address: "123 Main St, City, Country",
    coach: {
      name: "John Doe",
      bio: "An experienced leader and coach with 10+ years in the industry."
    },
    description: "Learn effective leadership techniques to inspire and motivate your team.",
    price: "199"
  };

  return (
    <div className="App">
      <SeminarCard seminar={seminar} />
    </div>
  );
};

export default BJJSeminarLandingPage;

