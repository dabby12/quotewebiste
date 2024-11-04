// src/components/Quotes.jsx
import React from "react";
import Shadow from "./shadow";

// List of quotes
export const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Do not watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    text: "Wu Lah Shi Hayden you nu peng you!",
    author: "Eian"
  },
  {
    "text": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "text": "In the middle of difficulty lies opportunity.",
    "author": "Albert Einstein"
  },
  {
    "text": "The best way to predict the future is to create it.",
    "author": "Peter Drucker"
  },
  {
    "text": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius"
  },
  {
    "text": "Your time is limited, so don't waste it living someone else's life.",
    "author": "Steve Jobs"
  },
  {
    "text": "Success usually comes to those who are too busy to be looking for it.",
    "author": "Henry David Thoreau"
  },
  {
    "text": "Don’t watch the clock; do what it does. Keep going.",
    "author": "Sam Levenson"
  },
  {
    "text": "You miss 100% of the shots you don’t take.",
    "author": "Wayne Gretzky"
  },
  {
    "text": "The future belongs to those who believe in the beauty of their dreams.",
    "author": "Eleanor Roosevelt"
  }
  
];

// Quotes Component
export const Quotes = ({ quote }) => {
  return (
    <Shadow>
      <div className="w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 flex items-center justify-center text-center rounded-xl">
        <p className="text-lg sm:text-xl text-white font-semibold overflow-auto">
          "{quote.text}" - {quote.author}
        </p>
      </div>
    </Shadow>
  );
};

export default Quotes;
