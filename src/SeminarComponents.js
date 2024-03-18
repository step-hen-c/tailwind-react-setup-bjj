export const SeminarDateTime = ({ datetime }) => (
    <p className="text-gray-600">Date & Time: {datetime}</p>
  );

export const SeminarCoach = ({ name }) => (
    <div>
      <p className="text-gray-600">Coach: {name}</p>
    </div>
  );

export const SeminarDescription = ({ description }) => (
    <p className="text-gray-600">{description}</p>
  );

export const SeminarImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-md" />
  );

export const SeminarTicketPrice = ({ price }) => (
    <p className="text-gray-600">Price: ${price}</p>
  );

export const SeminarTitle = ({ title }) => (
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">{title}</h2>
  );

export const SeminarVenue = ({ venue }) => (
    <>
      <p className="text-gray-600">Venue: {venue}</p>
    </>
  );


