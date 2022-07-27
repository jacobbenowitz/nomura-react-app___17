import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [a, setA] = useState(0)

  useEffect(() => {
    console.log('initial value', a)
    setA(100)
    console.log('after invoking setA func', a)
  }, [a])
  return (
    <div className="App">
      <div>
        <h2>Value of state variable 'a'</h2>
        <span>{a}</span>
      </div>
    </div>
  );
}

export default App;
