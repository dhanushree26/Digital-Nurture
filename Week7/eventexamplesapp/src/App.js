import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  // Counter state
  const [count, setCount] = useState(5);

  // Handler that calls two functions
  function handleIncrement() {
    increment();
    sayHello();
  }

  function increment() {
    setCount(prev => prev + 1);
  }
  function sayHello() {
    alert("Hello! Member1");
  }
  function decrement() {
    setCount(prev => prev - 1);
  }

  // Handler that takes a parameter
  function sayWelcome(msg) {
    alert(msg);
  }

  // Synthetic event
  function handleClick() {
    alert("I was clicked");
  }

  return (
    <div style={{ padding: "24px" }}>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
