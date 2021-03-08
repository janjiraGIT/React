import React , { useState }from 'react';
import "./App.css";

function Tweet({ name, message }) {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of likes {count}</h3>
      <button className="button" onClick={increment}>Like</button>
    </div>
  );
}


export default Tweet;