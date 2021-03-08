import React, { useState } from "react"

function Footer() {
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        setRed(!isRed);
      }

    return (
        <div className="footer">
            <h4 > This is footer</h4>
            <h1 className={isRed ? 'red' : ''}>Change color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
        </div>
    )
}

export default Footer