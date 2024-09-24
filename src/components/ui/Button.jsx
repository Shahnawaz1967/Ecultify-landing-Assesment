import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const baseStyle = 'px-4 py-2 rounded font-semibold';
  const variantStyle = variant === 'outline' ? 'border border-green-600 text-green-600' : 'bg-green-600 text-white';
  const sizeStyle = size === 'lg' ? 'text-lg' : 'text-sm';
  
  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
