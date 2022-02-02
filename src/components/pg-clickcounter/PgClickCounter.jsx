import React, { useState } from "react";

const ClickCounter = (props) => {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }
  return (
    <div>
      <h2>Hello from Click Counter</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>The button has been clicked {clickCount} times</p>
    </div>
  );
};

export default ClickCounter;
