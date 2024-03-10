import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import KeyboardDesign from './App/KeyboardDesign/KeyboardDesign';
import SpeedTest from './App/Speed-Test/SpeedTest';
import Quotes from './App/Quotes/Quotes';

function App() {
  const [disableKeys, setDisableKeys] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);
  const [text, setText] = useState(''); // State to hold the typed text
  const [errorCount, setErrorCount] = useState(0);
  const [quote, setQuote] = useState(''); // State to hold the random quote
  const [showPopup, setShowPopup] = useState(true); // State to show/hide the popup
  const textAreaRef = useRef(null); // Ref for the text area

  useEffect(() => {
    toggleDisableKeys();
  }, []);

  useEffect(() => {
    if (!showPopup) {
      textAreaRef.current?.focus(); // Focus the text area when the popup is shown
    }
  }, [showPopup]);

  const handleKeydown = (e) => {
    if (disableKeys) {
      e.preventDefault();
    }
    setPressedKey(e.code);
  };

  const handleKeyup = () => {
    setPressedKey(null);
  };

  const toggleDisableKeys = () => {
    setDisableKeys(!disableKeys);
    if (!disableKeys) {
      setQuote(getRandomQuote());
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const getRandomQuote = () => {
    const quotes = [
      'Quote 1',
      'Quote 2',
      'Quote 3',
      // Add more quotes here
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const handleStartTest = () => {
    setShowPopup(false);
    toggleDisableKeys();
  };

  return (
    <div onKeyDown={handleKeydown} onKeyUp={handleKeyup} tabIndex="-1">
      {showPopup && (
        <div className="popup-background">
          <div className="popup">
            <div className="popup-content">
              <h2>Instructions</h2>
              <ul>
                <li>Please complete the full test for an accurate result</li>
                <li>If the WPM is not updated automatically, you may click the "Calculate WPM" button</li>
                <li>If you want to restart the test, press the restart button or reload the site</li>
              </ul>
              <Button variant="primary" onClick={handleStartTest}>Start Test</Button>
            </div>
          </div>
        </div>
      )}
      <div className="text-container">
        <Quotes text={text} disableKeys={disableKeys} setErrorCount={setErrorCount} />

        <textarea
          ref={textAreaRef}
          className="text-area"
          value={text}
          onChange={handleTextChange}
          disabled={disableKeys} // Disable the textarea if keys are disabled
        ></textarea>
        <SpeedTest text={text} disableKeys={disableKeys} errors={errorCount} quote={quote} />
      </div>

      <KeyboardDesign pressedKey={pressedKey} toggleDisableKeys={toggleDisableKeys} />
    </div>
  );
}

export default App;
