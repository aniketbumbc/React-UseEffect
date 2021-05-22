import React, { useEffect } from 'react';

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

export default LifeCycleDemo;
