//ColorCell.js
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const ColorCell = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyColor = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="color-cell" style={{ backgroundColor: color }}>
      <span>{color}</span>
      <CopyToClipboard text={color}>
        <button
          onClick={handleCopyColor}
          style={{
            backgroundColor: isCopied ? '#4CAF50' : 'transparent',
            color: isCopied ? 'white' : 'inherit',
          }}
        >
          <FaCopy /> {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ColorCell;
