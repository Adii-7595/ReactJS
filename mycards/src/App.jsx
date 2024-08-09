import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify'; // Assuming you're using this for error handling

function App() {
  const [courses, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        console.log(output);

        setCourse(output.data); // Assuming the courses data is in `output.data`
      } catch (error) {
        toast.error('Something went wrong');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      {/* Only render Cards if courses is not null */}
      {courses ? <Cards courses={courses} /> : <p>Loading courses...</p>}
    </div>
  );
}

export default App;
