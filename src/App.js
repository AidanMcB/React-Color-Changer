import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('')

  const changeColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const newColor = `rgb(${red},${green},${blue})`
    setColor(newColor)
  }
  return (
    <div style={{
      backgroundColor: color,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <button style={{
        borderRadius:"25px",
        fontSize: "18px",
      outline:"none"
      }}
      onClick={() => changeColor()} >Click Me!</button>
    </div>
  );
}

export default App;
