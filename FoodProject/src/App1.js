import React, { useState } from 'react';

// Component
const App1 = () => {
  // Define state variable for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to reset the counter to 0
  const reset = () => {
    setCount(0);
  };

  // Function to set the counter to 5
  const setTo5 = () => {
    setCount(5);
  };
console.log(count,"COUNTER");
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Buttons to interact with the counter */}
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={setTo5}>Set to 5</button>
    </div>
  );
};

export default React.memo(App1);
