import React from 'react';
import {SeminarCoach, SeminarDateTime, SeminarDescription, SeminarImage, SeminarTicketPrice, SeminarTitle, SeminarVenue} from './SeminarComponents';

const SeminarCard = ({ seminar }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <SeminarImage src={seminar.imageSrc} alt={seminar.imageAlt} />
        <SeminarTitle title={seminar.title} />
        <SeminarDateTime dateTime={seminar.dateTime} />
        <SeminarVenue venue={seminar.venue} address={seminar.address} />
        <SeminarCoach name={seminar.coach.name} bio={seminar.coach.bio} />
        <SeminarDescription description={seminar.description} />
        <SeminarTicketPrice price={seminar.price} />
      </div>
    );
  };
  
  export default SeminarCard;