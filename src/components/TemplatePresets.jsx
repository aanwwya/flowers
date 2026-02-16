import React, { useState } from 'react';
import './TemplatePresets.css';

function TemplatePresets({ templates, flowers, onSelect }) {
  const getFlowerNames = (templateFlowers) => {
    return templateFlowers
      .map(f => {
        const flower = flowers.find(fl => fl.id === f.id);
        return flower ? `${flower.name} (${f.quantity})` : '';
      })
      .join(', ');
  };

  return (
    <div className="template-presets">
      <h2>Choose a Template</h2>
      <div className="templates-grid">
        {templates.map(template => (
          <div key={template.id} className="template-card" onClick={() => onSelect(template)}>
            <h3>{template.name}</h3>
            <p className="template-description">{template.description}</p>
            <p className="template-flowers">{getFlowerNames(template.flowers)}</p>
            <button className="select-btn">Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplatePresets;
