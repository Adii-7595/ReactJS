import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify'; // Assuming you're using this for error handling
import './index.css'
function App() {
  const [courses, setCourse] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);

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
    <div className='app'>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData}
                category = {category}
                setCategory = {setCategory}
        />
      </div>
      {/* Only render Cards if courses is not null */}
      <div  className='cards'>
        {courses ? <Cards courses={courses} category={category} setCategory = {setCategory}/> : <p>Loading courses...</p>}
      </div>
    </div>
  );
}

export default App;
