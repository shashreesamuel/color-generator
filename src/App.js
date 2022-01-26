import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const [opacity, setOpacity] = useState("");

  const [filter, setFilter] = useState("filter( )");

  const [gradient, setGradient] = useState(
    "linear-gradient( rgb( ), rgb( ), rgb( ) )"
  );

  return (
    <div>
      <h1 className="logo">Colorify</h1>
      <h2 className="title">Color Generator</h2>
      <span
        style={{
          backgroundColor: color,
          opacity: opacity,
          filter: filter,
          background: gradient,
        }}
        className="container"
      />
      <div className="buttons">
        <input
          type="text"
          value={color}
          required
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color code"
        />
        <input
          type="text"
          value={opacity}
          required
          onChange={(e) => setOpacity(e.target.value)}
          placeholder="Enter a opacity"
        />
        <input
          type="text"
          value={filter}
          required
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Enter a filter"
        />
        <input
          type="text"
          value={gradient}
          required
          onChange={(e) => setGradient(e.target.value)}
          placeholder="Enter a gradient"
        />
      </div>
    </div>
  );
}

export default App;
