import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 30); // Adjust typing speed here (milliseconds)

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export default Typewriter;

