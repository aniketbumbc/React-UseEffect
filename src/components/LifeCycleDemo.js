import React, { useEffect } from 'react';

const LifeCycleDemo = ({ a, b }) => {
  useEffect(() => {
    console.log('render useEffect ', a);
  }, [a]);

  return (
    <div>
      <h4> Life Cycle Demo</h4>
      <div>
        I've got 2 props: a={a} and b={b}
      </div>
    </div>
  );
};

export default LifeCycleDemo;
