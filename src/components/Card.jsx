import React from 'react';
import { useState } from 'react';
import './Card.css';
import Colordrop from './colordrop'

const Card = ({ title, image }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [borderColor, setBorderColor] = useState('#000'); // Default border color

  const handleApiChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleColorChange = (color) => {
    setBorderColor(color); 
  };

  return(
    <div id="main">
      <div id="controller">
        <input
          id="api"
          type="text"
          placeholder="Enter API here"
          value={imageUrl}
          onChange={handleApiChange}
        />
        <div>
          <Colordrop onChange={handleColorChange} /> 
        </div>
      </div>
      <div className="card" style={{ border: `4px solid ${borderColor}` }}>
        <img
          src={imageUrl}
          alt={title}
          className="card-image"
          style={{ borderColor: borderColor }}
        />
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default Card;