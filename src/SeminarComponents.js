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
  <a
    href="https://buy.stripe.com/test_6oE8ACdpE1kR4zC9AA" // Your Stripe Payment Link
    target="_blank" // Open in a new tab
    rel="noopener noreferrer" // For security purposes
    className="mt-2 w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg text-center inline-block"
  >
    Pay with Stripe
  </a>
);

export const SeminarVenue = ({ venue }) => (
  <div className="flex-1">
    <div className="font-bold text-gray-700 text-xl">Location</div>
    <p className="text-gray-700">{venue}</p>
  </div>
);

export const SeminarDateTime = ({ datetime }) => {
  // Function to add the appropriate suffix to the day
  const getDaySuffix = (date) => {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  // Parse the date string and format it
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    const date = new Date(dateString);
    const day = date.getDate();
    const formattedDate = date.toLocaleDateString('en-UK', options);
    
    // Replace the day number with the day and the correct suffix
    return formattedDate.replace(day, `${day}${getDaySuffix(day)}`);
  };

  return (
    <div className="flex-1">
      <div className="font-bold text-xl text-gray-700">Date & Time</div>
      <p className="text-gray-700">{formatDate(datetime)}</p>
    </div>
  );
};

export const SeminarCoach = ({ name }) => (
  <p className="text-4xl font-semibold text-gray-700 my-4 text-center">{name}</p>
);

export const SeminarDescription = ({ description }) => (
  <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner text-center">
    <p className="text-gray-600">{description}</p>
  </div>
);

