import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
