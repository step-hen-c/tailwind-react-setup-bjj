export const SeminarDateTime = ({ dateTime }) => (
    <p className="text-gray-600">Date & Time: {dateTime}</p>
  );


export const StripePaymentButton = ({ price, onPayment }) => (
    <button
      onClick={() => onPayment(price)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Pay with Stripe
    </button>
  );

export const SeminarCoach = ({ name, bio }) => (
    <div>
      <p className="text-gray-600">Coach: {name}</p>
      <p className="text-gray-600">{bio}</p>
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

export const SeminarVenue = ({ venue, address }) => (
    <>
      <p className="text-gray-600">Venue: {venue}</p>
      <p className="text-gray-600">Address: {address}</p>
    </>
  );


