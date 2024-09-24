import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="bg-white py-20 mt-2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard quote="Ecultify has transformed the way we do business. Our productivity has skyrocketed!" author="Rajesh Kumar" company="CEO, DigitalMinds" />
          <TestimonialCard quote="The analytics provided by Ecultify gave us insights we never had before. Highly recommended!" author="Vikram Singh Founder" company="Founder, StartHub India" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
