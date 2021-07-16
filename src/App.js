import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  console.log("x:", x, " ---  y:", y);

  function handleClickAsync() {
    setTimeout(() => {
      setX(prev => prev + 1);
      setY(prev => prev + 1);
    });
  }

  function handleClickSync() {
    setX(prev => prev + 1);
    setY(prev => prev + 1);
  }

  return (
    <>
      <p>Please observe the different behavior in the console!</p>
      <button onClick={handleClickSync}>
        Call setState functions synchronously
      </button>
      <br />
      <br />
      <button onClick={handleClickAsync}>
        Call setState functions asynchronously
      </button>
    </>
  );
}
