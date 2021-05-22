import React, { useState, useEffect } from 'react';
import './App.css';
import LifeCycleDemo from './components/LifeCycleDemo';

function App() {
  useEffect(() => {
    console.log('parent state change ', count1);
  });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <div>
        <LifeCycleDemo a={count1} b={count2} />
        <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      </div>
    </>
  );
}

export default App;
