import React, { useState } from "react";
function LapTimer() {
  const [count, setCount] = useState(0);
  const [laps, setLaps] = useState([]);
  const handleLap = () => {
    setLaps([...laps, count]);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleLap}>Lap</button>
      <h2>Laps:</h2>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap}</li>
        ))}
      </ul>
    </>
  );
}
export default LapTimer;
