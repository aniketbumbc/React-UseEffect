import React, { useState } from 'react';
import Reddit from './components/Reddit';
// import LifeCycleDemo from './components/LifeCycleDemo';

function App() {
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(inputValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };
  return (
    <div>
      <h2> Hello </h2>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </div>
  );
}

export default App;
