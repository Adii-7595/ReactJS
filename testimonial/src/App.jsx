import React from "react";
import reviews from "./Data";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-600">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[20%] mx-auto mt-2"></div>
      </div>
      <Testimonials reviews={reviews} />
    </div>
  );
}

export default App;
