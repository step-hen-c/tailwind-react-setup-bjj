import React from 'react';
import {SeminarCoach, SeminarDateTime, SeminarDescription, SeminarImage, SeminarTicketPrice, SeminarTitle, SeminarVenue} from './SeminarComponents';

const SeminarCard = ({ seminar }) => {
  // Destructure the properties from the seminar object
  const { imageSrc, imageAlt, title, datetime, venue, coach, description, price } = seminar;

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <SeminarImage src={imageSrc} alt={imageAlt} />
      <SeminarTitle title={title} />
      <SeminarDateTime datetime={datetime} />
      <SeminarVenue venue={venue}/>
      <SeminarCoach name={coach}/>
      <SeminarDescription description={description} />
      <SeminarTicketPrice price={price} />
    </div>
  );
};

export default SeminarCard;