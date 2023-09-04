import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";
const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[120px] mt-1 mx-auto"></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
};

export default App;
