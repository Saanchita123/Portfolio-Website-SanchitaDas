import React from 'react';

export const Badge = ({ children, className = "", variant = "default" }) => {
  const baseClasses = "inline-flex items-center rounded-md px-3 py-1.5 text-xs font-semibold transition-colors";
  
  const variants = {
    default: "bg-gray-900 text-gray-50",
    secondary: "bg-gray-100 text-gray-900",
    destructive: "bg-red-500 text-white",
    outline: "border border-gray-200 text-gray-900"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};