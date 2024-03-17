import React from 'react';

const SeminarBooking = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your own logic here for handling the form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Seminar Booking</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Seminar Information</h2>
          <p className="text-gray-600">Title: Mastering Leadership Skills</p>
          <p className="text-gray-600">Description: Learn effective leadership techniques to inspire and motivate your team. Discover proven strategies for communication, decision-making, and problem-solving.</p>
          <p className="text-gray-600">Coach: John Doe</p>
          <p className="text-gray-600">Date & Time: July 15, 2023 | 9:00 AM - 4:00 PM</p>
        </div>
        
        <div className="mb-8">
          {/* Replace with your actual image */}
          <img src="/home/stephencarr/Desktop/dev/BJJ-Project/react-frontend/newest_react/my-project/src/welcome.jpg" alt="Seminar" className="w-full rounded-lg shadow-md" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Book Your Spot</h2>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeminarBooking;