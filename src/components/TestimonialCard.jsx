import React from 'react';

const TestimonialCard = ({ quote, author, company }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <h4 className="font-semibold">{author}</h4>
      <p className="text-gray-600">{company}</p>
    </div>
  );
};

export default TestimonialCard;
