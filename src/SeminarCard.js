import React from 'react';
import {SeminarCoach, SeminarDateTime, SeminarDescription, SeminarImage, SeminarTicketPrice, SeminarTitle, SeminarVenue, StripePaymentButton} from './SeminarComponents';

const SeminarCard = ({ seminar }) => {
  // Destructure the properties from the seminar object
  const { imageSrc, imageAlt, title, datetime, venue, coach, description, price } = seminar;

  return (
    <div className="min-h-screen flex flex-col bg-blue-100 p-4 font-serif">
      <div className="mx-auto w-full md:max-w-4xl">
        <SeminarImage src={imageSrc} alt={imageAlt} />
        <div className="mt-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <SeminarTitle title={title} />
              <div className="flex flex-col md:flex-row justify-between">
                <SeminarVenue venue={venue} />
                <SeminarDateTime datetime={datetime} />
              </div>
            </div>
            <div className="lg:w-1/4 flex flex-col items-end">
              <SeminarTicketPrice price={price} />
              <StripePaymentButton />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <SeminarCoach name={coach} />
          </div>
          <SeminarDescription description={description} />
        </div>
      </div>
    </div>
  );
};


export default SeminarCard;