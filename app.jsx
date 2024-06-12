import React, { useState } from 'react';
import ColorCell from './components/ColorCell.jsx';
import "./styles/styles.css";

const App = () => {
  const generateRandomColors = (num) => {
    const charsHexadecimals = '0123456789ABCDEF';
    let colors = [];

    for (let j = 0; j < num; j++) {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += charsHexadecimals[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }

    return colors;
  };

  const [numColors, setNumColors] = useState(24);
  const [colors, setColors] = useState(generateRandomColors(numColors));

  const handleGenerateColors = () => {
    setColors(generateRandomColors(numColors));
  };

  return (
    <>
    <div>
      <h1>Hexadecimal Color Generator</h1>
      <input type="number" value={numColors} onChange={(e) => setNumColors(e.target.value)} />
      <button className='generate' onClick={handleGenerateColors}>Generate</button>
      <div className="color-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {colors.map((color, index) => (
          <ColorCell key={index} color={color} />
        ))}
      </div>
    </div>
    <footer className="footer">
      <p>Created by Ariana Spretz</p>
    </footer>
    </>
  );
};

export default App;
