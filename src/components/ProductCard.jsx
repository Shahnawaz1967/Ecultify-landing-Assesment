import React from 'react';

const ProductCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
