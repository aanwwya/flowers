import React from 'react';
import './BouquetPreview.css';

function BouquetPreview({ selectedFlowers, message, flowers, onStartOver }) {
  const getFlowerDetails = () => {
    return selectedFlowers.map(sf => {
      const flower = flowers.find(f => f.id === sf.id);
      return { ...flower, quantity: sf.quantity };
    });
  };

  const flowerDetails = getFlowerDetails();
  const totalFlowers = selectedFlowers.reduce((sum, f) => sum + f.quantity, 0);

  return (
    <div className="bouquet-preview">
      <h2>Your Beautiful Bouquet</h2>
      
      <div className="preview-container">
        <div className="bouquet-display">
          <div className="flowers-visualization">
            {flowerDetails.map((flower, idx) => (
              <div key={idx} className="flowers-group" style={{ '--color': flower.color }}>
                <div className="flowers">
                  {Array.from({ length: flower.quantity }).map((_, i) => (
                    <span key={i} className="flower-item">{flower.emoji}</span>
                  ))}
                </div>
                <p className="flower-label">{flower.name} ×{flower.quantity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="message-display">
          <div className="message-card">
            {message.recipientName && (
              <p className="recipient">
                <strong>Dear {message.recipientName},</strong>
              </p>
            )}
            <p className="message-text">{message.message || '(No message added)'}</p>
            <p className="closing">With love 💐</p>
          </div>
        </div>
      </div>

      <div className="bouquet-info">
        <p>Total flowers: <strong>{totalFlowers}</strong></p>
      </div>

      <button className="start-over-btn" onClick={onStartOver}>
        Create Another Bouquet
      </button>
    </div>
  );
}

export default BouquetPreview;
