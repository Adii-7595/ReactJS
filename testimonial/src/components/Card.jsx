import React from "react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
  let review = props.review;

  return (
    <div className="bg-white p-10 max-w-[450px] w-[90vw] shadow-lg  relative flex flex-col items-center">
      {/* Profile Image */}
      <div className="relative">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25] border-4 border-white"
          src={review.image}
          alt={review.name}
        />
        <div className="w-[150px] h-[150px] bg-violet-500 rounded-full absolute top-[-10px] left-[-5px] z-[-10]"></div>
      </div>

      {/* Name and Job */}
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
        <p className="text-violet-300 uppercase text-sm mt-2">{review.job}</p>
      </div>

      {/* Quote */}
      <div className="text-violet-400 mx-auto mt-5 text-5xl">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500 italic">
        {review.text}
      </div>
      <div className="text-violet-400 mx-auto mt-5 text-5xl">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
