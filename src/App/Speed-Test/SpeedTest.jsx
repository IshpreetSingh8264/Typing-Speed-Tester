import React, { useState, useEffect, useRef } from 'react';

const SpeedTest = ({ text, disableKeys, errors,quote }) => {
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0); // State for CPM (updated live)
  const [wpm, setWpm] = useState(0); // State for WPM (updated after test)
  const [accuracy, setAccuracy] = useState(0); // State for accuracy

  const previousTypedChars = useRef(0); // Track previously typed characters

  useEffect(() => {
    if (disableKeys) {
      setStartTime(Date.now());
      previousTypedChars.current = 0; // Reset previous characters
      setWpm(0); // Reset WPM on new test
      setAccuracy(0); // Reset accuracy on new test
    }
  }, [disableKeys]);

  useEffect(() => {
    if (startTime && !disableKeys) {
      const now = Date.now();
      const elapsedTime = (now - startTime) / 1000; // Time in seconds

      // Calculate live CPM (considering only newly typed characters)
      const currentTypedChars = text.trim().length;
      const newlyTypedChars = currentTypedChars - previousTypedChars.current;
      const liveCpm = Math.round((newlyTypedChars / elapsedTime) * 60);

      setTypingSpeed(liveCpm);
      // handleCalculateWpm();

      previousTypedChars.current = currentTypedChars;

    }
  }, [startTime, disableKeys, text]);
useEffect(() => {
  if (disableKeys) {
    handleCalculateWpm(); // Calculate WPM when test is completed
  }
}, [startTime, disableKeys]);
  // Calculate WPM and accuracy after test completion
// Calculate WPM and accuracy after test completion
useEffect(() => {
  if (text.trim().length === quote.trim().length) {
    console.log('text:', text);
  }
}, [text, disableKeys, quote]);


const handleCalculateWpm = () => {
  if (startTime && !disableKeys) {
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;

    const typedChars = text.trim().length;
    const correctChars = typedChars - errors;
    const cpm = Math.round((correctChars / totalTime) * 60);

    const words = text.trim().split(/\s+/).filter(word => word.match(/^[a-zA-Z]+$/)); // Filter punctuation and special characters
    const totalWordCount = words.length;
    const averageWordLength = totalWordCount ? words.reduce((sum, word) => sum + word.length, 0) / totalWordCount : 1;

    const wpm = Math.round(cpm / averageWordLength);
    setWpm(wpm);

    const accuracy = Math.round((correctChars / typedChars) * 10000) / 100;
    setAccuracy(accuracy);
  }
};

  
  return (
    <div className="speed-test-container">
      {/* <p>Current Typing Speed: {typingSpeed} CPM</p> */}
      <p>Estimated WPM: {wpm} (Words per Minute - Calculated after Test)</p>
      <p>Accuracy: {accuracy}% (Calculated after Test)</p>
      <button onClick={handleCalculateWpm} disabled={disableKeys}>
        Calculate Accurate WPM
      </button>
    </div>
  );
};

export default SpeedTest;
