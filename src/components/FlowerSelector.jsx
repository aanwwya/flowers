import React, { useState } from 'react';
import TemplatePresets from './TemplatePresets';
import IndividualFlowerPicker from './IndividualFlowerPicker';
import './FlowerSelector.css';

function FlowerSelector({ flowers, templates, onFlowersSelected }) {
  const [mode, setMode] = useState('template');

  const handleTemplateSelect = (template) => {
    onFlowersSelected(template.flowers);
  };

  const handleCustomBouquet = (flowerArray) => {
    onFlowersSelected(flowerArray);
  };

  return (
    <div className="flower-selector">
      <div className="selector-tabs">
        <button
          className={`tab-btn ${mode === 'template' ? 'active' : ''}`}
          onClick={() => setMode('template')}
        >
          Template Presets
        </button>
        <button
          className={`tab-btn ${mode === 'custom' ? 'active' : ''}`}
          onClick={() => setMode('custom')}
        >
          Custom Bouquet
        </button>
      </div>

      {mode === 'template' && (
        <TemplatePresets templates={templates} flowers={flowers} onSelect={handleTemplateSelect} />
      )}

      {mode === 'custom' && (
        <IndividualFlowerPicker flowers={flowers} onConfirm={handleCustomBouquet} />
      )}
    </div>
  );
}

export default FlowerSelector;
