import React, { useState } from 'react';
import Tours from './components/tours';
import data from './data';

function App() {

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const [tours, setTours] = useState(data); // Initialize with data

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No tours left</h2>
        <button onClick = {()=>setTours(data)}> Refresh</button>
      </div>

    )
  }

  return (
    <div>
      <h2>Tour Packages</h2>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
