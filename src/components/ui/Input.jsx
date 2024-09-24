import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input className={`border border-gray-300 rounded px-4 py-2 ${className}`} {...props} />
  );
};

export default Input;
