import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = (props) => {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((index + 1) % reviews.length); // Loop to the next review
  };

  const prevReview = () => {
    setIndex((index - 1 + reviews.length) % reviews.length); // Loop to the previous review
  };

  return (
    <>
      <div>
        <Card review={reviews[index]} />

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center p-2 text-3xl text-violet-400 font-bold  bg-white">
          <button onClick={prevReview} className="cursor-pointer hover:text-violet-600 mx-4">
            <FaChevronLeft />
          </button>
          <button onClick={nextReview} className="cursor-pointer hover:text-violet-600 mx-4">
            <FaChevronRight />
          </button>
        </div>

        {/* Surprise Button */}
        <div className="bg-white text-center p-4 " >
          <button
            onClick={() => setIndex(Math.floor(Math.random() * reviews.length))}
            className="bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
