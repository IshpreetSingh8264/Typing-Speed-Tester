import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    toggleDisableKeys();
  }, []);

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

  return (
    <div onKeyDown={handleKeydown} onKeyUp={handleKeyup} tabIndex="-1">
      <div className="text-container">
        <Quotes text={text} disableKeys={disableKeys} setErrorCount={setErrorCount} />

        <textarea
          className="text-area"
          value={text}
          onChange={handleTextChange}
          disabled={disableKeys} // Disable the textarea if keys are disabled
        ></textarea>
        <button className='button-large' onClick={toggleDisableKeys}>
          {disableKeys ? 'Start Test' : 'Stop Test'}
        </button>
        <SpeedTest text={text} disableKeys={disableKeys} errors={errorCount} quote={quote} />
      </div>

      <KeyboardDesign pressedKey={pressedKey} toggleDisableKeys={toggleDisableKeys} />
    </div>
  );
}

export default App;