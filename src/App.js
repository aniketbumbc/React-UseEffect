import React, { useState, useEffect } from 'react';
import './App.css';
// import LifeCycleDemo from './components/LifeCycleDemo';

const LifeCycleDemo = () => {
  useEffect(() => {
    console.log('render');

    return () => console.log('unMount....');
  }, []);

  return (
    <div>
      <h4> Life Cycle Demo</h4>
    </div>
  );
};

function App() {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);
  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(!mounted);
  return (
    <>
      <label className='app'>
        {random}
        {mounted}{' '}
      </label>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifeCycleDemo />}
    </>
  );
}

export default App;
