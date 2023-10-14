import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  const toggleColorPicker = () => {
    setShowColors(!showColors);
  };

  return (
    <div>
      <button onClick={toggleColorPicker}>
        {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
      </button>

      {showColors && (
        <div className="color-squares">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
