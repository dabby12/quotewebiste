import React, { useState, useEffect } from "react";
import { Quotes, quotes } from "./components/Quotes";
import ButtonClick from "./components/buttonClick";
import Sharing from "./components/Sharing";

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [isWindows, setIsWindows] = useState(false); // Track if the user is on Windows
  const [isAllowed, setIsAllowed] = useState(true); // Track if the user allows access

  // warning to windows users 
  useEffect(() => {
    // Check the user agent to see if the platform is Windows
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Windows")) {
      setIsWindows(true); // If Windows is detected, set the state to true

      // Show a confirmation dialog
      const userWantsToProceed = window.confirm(
        "Warning: You are using Windows OS, which is not fully supported. Do you still want to proceed?"
      );

      // If the user doesn't want to proceed, block access
      if (!userWantsToProceed) {
        setIsAllowed(false);
      }
    }
  }, []);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  // If the user doesn't allow access, show an error message
  if (isWindows && !isAllowed) {
    return <div className="text-red-500 text-center m-10 text-6xl">Access denied. Windows OS is not supported.</div>;
  }

  // Render the main content
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-lg text-center">
        <Quotes quote={quote} />
        <ButtonClick getRandomQuote={getRandomQuote} />
        <Sharing quote={quote} />
      </div>
    </div>
  );
}

export default App;
