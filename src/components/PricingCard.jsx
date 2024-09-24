import React from 'react';

const PricingCard = ({ title, price, features, highlighted }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${highlighted ? 'border-2 border-green-600' : ''}`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">• {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
