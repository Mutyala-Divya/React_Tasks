import React, { useState } from 'react';

function Todaystask() {
  const [inputText, setInputText] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setLetterCount(text.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Enter here"
        />
        <p>Number of letters: {letterCount}</p>
      </header>
    </div>
  );
}

export default Todaystask;
