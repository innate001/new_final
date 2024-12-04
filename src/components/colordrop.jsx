import React from 'react';
import './colordrop.css'

const Colordrop = ({ onChange }) => {
  const handleColorSelect = (e) => {
    onChange(e.target.value);
  };

  return (
    <select id ="drop" onChange={handleColorSelect}>
        <option value="#FF0000">Red</option>
        <option value="#00FF00">Green</option>
        <option value="#0000FF">Blue</option>
        <option value="#FFA500">Orange</option>
    </select>
  );
};

export default Colordrop;