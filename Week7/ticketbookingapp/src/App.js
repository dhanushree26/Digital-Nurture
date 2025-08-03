import React, { useState } from 'react';

// Greeting components
function UserGreeting() {
  return <h1>Please sign up.</h1>;
}

function GuestGreeting() {
  return <h1>Welcome back</h1>;
}

// Main App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  // Display only what your images show
  return (
    <div style={{ margin: 150, textAlign: "left" }}>
      {isLoggedIn ? (
        <>
          <GuestGreeting />
          <button onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <>
          <UserGreeting />
          <button onClick={handleLoginClick}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
