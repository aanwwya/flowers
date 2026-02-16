import React, { useState } from 'react';
import './MessageEditor.css';

function MessageEditor({ onMessageConfirm, onBack }) {
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirm = () => {
    onMessageConfirm({
      recipientName,
      message
    });
  };

  return (
    <div className="message-editor">
      <h2>Add a Personal Message</h2>
      
      <div className="form-group">
        <label htmlFor="recipient">Recipient Name (optional)</label>
        <input
          id="recipient"
          type="text"
          placeholder="Enter recipient's name..."
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="6"
        />
      </div>

      <div className="message-preview">
        <h3>Preview</h3>
        {recipientName && <p><strong>Dear {recipientName},</strong></p>}
        <p>{message || '(Your message will appear here)'}</p>
      </div>

      <div className="button-group">
        <button className="back-btn" onClick={onBack}>Back</button>
        <button className="confirm-btn" onClick={handleConfirm}>Create Bouquet</button>
      </div>
    </div>
  );
}

export default MessageEditor;
