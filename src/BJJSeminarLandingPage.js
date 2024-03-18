import React, { useState, useEffect } from 'react'; 
import SeminarCard from './SeminarCard';

const BJJSeminarLandingPage = () => {
  const [seminar, setSeminar] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/seminars/seminars/4/')
      .then(response => response.json())
      .then(data => {
        setSeminar(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  if (!seminar) {
    return <div>Loading...</div>; // Render a loading state or a spinner
  }

  return (
    <div className="App">
      <SeminarCard seminar={seminar} />
    </div>
  );
};

export default BJJSeminarLandingPage;

