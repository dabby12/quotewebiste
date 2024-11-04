import React from "react";

const ButtonClick = ({ getRandomQuote }) => {
  return (
    <button
      className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
        hover:from-green-500 hover:via-blue-600 hover:to-purple-700 
        focus:outline-none hover:ring-4 hover:ring-blue-300 
        focus:from-green-500 focus:via-blue-600 focus:to-purple-700 
        text-white font-bold py-2 px-4 rounded hover:cursor-auto" 
      onClick={getRandomQuote}
    >
      Get New Quote
    </button>
  );
};

export default ButtonClick;
