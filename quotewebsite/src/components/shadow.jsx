// src/components/Shadow.jsx
import React from "react";

// Shadow component for reusable shadow effect
const Shadow = ({ children }) => {
  return (
    <div className="w-80 sm:w-96 h-40 p-6 rounded-x1 shadow-xl
     bg-secondary bg-opacity-20 backdrop-blur-lg transition-all duration-300">
      {children}
    </div>
  );
};

export default Shadow;
