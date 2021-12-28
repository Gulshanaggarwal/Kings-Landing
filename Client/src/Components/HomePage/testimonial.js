import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { testimonialData } from "../../StaticData/testimonialData";

export default function Testimonial(){
  return (
    <section className="p-2 bg-star-pattern" id="testimonial">
      <span className="font-medium   text-2xl text-white px-2 py-4 my-4 block  sm:text-4xl">
        What Our Customers Says!
      </span>
      <hr/>
      <div className="container w-5/6 bg-gray-100 mx-auto rounded-md shadow-inner my-8 py-4">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3000}
          animationDuration={4000}
          infinite
          disableButtonsControls
          items={testimonialData}
        />
      </div>
    </section>
  );
};
