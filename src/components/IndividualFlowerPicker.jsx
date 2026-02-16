import React, { useState } from 'react';
import './IndividualFlowerPicker.css';

function IndividualFlowerPicker({ flowers, initialBouquet, onConfirm }) {
  const [bouquet, setBouquet] = useState(initialBouquet || {});

  const addFlower = (flowerId) => {
    setBouquet(prev => ({
      ...prev,
      [flowerId]: (prev[flowerId] || 0) + 1
    }));
  };

  const removeFlower = (flowerId) => {
    setBouquet(prev => {
      const updated = { ...prev };
      if (updated[flowerId] > 1) {
        updated[flowerId] -= 1;
      } else {
        delete updated[flowerId];
      }
      return updated;
    });
  };

  const getTotalFlowers = () => {
    return Object.values(bouquet).reduce((sum, qty) => sum + qty, 0);
  };

  const handleConfirm = () => {
    if (getTotalFlowers() === 0) {
      alert('Please add at least one flower to your bouquet!');
      return;
    }
    const flowerArray = Object.entries(bouquet).map(([id, quantity]) => ({
      id: parseInt(id),
      quantity
    }));
    onConfirm(flowerArray);
  };

  return (
    <div className="individual-picker">
      <h2>Build Your Custom Bouquet</h2>
      <div className="flowers-list">
        {flowers.map(flower => (
          <div key={flower.id} className="flower-item">
            <div className="flower-info">
              <span className="flower-emoji">{flower.emoji}</span>
              <div>
                <h4>{flower.name}</h4>
                <p>{flower.description}</p>
              </div>
            </div>
            <div className="flower-controls">
              <button onClick={() => removeFlower(flower.id)} className="qty-btn minus">−</button>
              <span className="quantity">{bouquet[flower.id] || 0}</span>
              <button onClick={() => addFlower(flower.id)} className="qty-btn plus">+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bouquet-summary">
        <p>Total flowers: <strong>{getTotalFlowers()}</strong></p>
        <button className="confirm-btn" onClick={handleConfirm}>Confirm Bouquet</button>
      </div>
    </div>
  );
}

export default IndividualFlowerPicker;
