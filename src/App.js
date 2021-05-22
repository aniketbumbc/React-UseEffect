import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import LifeCycleDemo from './components/LifeCycleDemo';

function App() {
  const inputRef = useRef();
  const [value, setValue] = useState('');

  useEffect(() => {
    inputRef.current.focus();
    console.log('render...');
  }, [inputRef, value]);

  return (
    <div>
      <h2> Hello </h2>
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
