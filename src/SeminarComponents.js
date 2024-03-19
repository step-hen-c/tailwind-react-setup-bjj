export const SeminarImage = ({ alt }) => (
  <img 
    src="https://via.placeholder.com/800x500" // Placeholder service URL
    alt={alt}
    className="w-full h-64 object-cover rounded-lg"
  />
);

export const SeminarTitle = ({ title }) => (
  <h2 className="text-8xl font-bold text-gray-900">{title}</h2>
);

export const SeminarTicketPrice = ({ price }) => (
  <p className="text-3xl font-semibold text-gray-700">${price}</p>
);

export const StripePaymentButton = () => (
  <button className="mt-2 w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg">
    Pay with Stripe
  </button>
);

export const SeminarVenue = ({ venue }) => (
  <div className="flex-1">
    <div className="font-bold text-gray-700 text-xl">Location</div>
    <p className="text-gray-700">{venue}</p>
  </div>
);

export const SeminarDateTime = ({ datetime }) => (
  <div className="flex-1">
    <div className="font-bold text-xl text-gray-700">Date & Time</div>
    <p className="text-gray-700">{datetime}</p>
  </div>
);

export const SeminarCoach = ({ name }) => (
  <p className="text-4xl font-semibold text-gray-700 mt-4">{name}</p>
);

export const SeminarDescription = ({ description }) => (
  <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
    <p className="text-gray-600">{description}</p>
  </div>
);

