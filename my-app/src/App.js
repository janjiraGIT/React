import React, { useState } from 'react';
import Tweet from "./Tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  const [users, setUsers] = useState([
    { name: "Janjira", message: "Sover" },
    { name: "Joakim", message: "Puttar" },
    { name: "Benjamin", message: "Godis" },
    { name: "Bambu", message: "Vov Vov" },
  ]);

  return (
    
    <div className="app">
      <h1 className={isRed ? 'red' : ''}>Change color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>

  );
}

export default App;