import React from 'react';

const WindowModal: React.FC = () => (
  <div className="window-modal">
    <div className="title-bar">
      <div className="title">
        <span className="window-icon" />
        <span>Control Panel</span>
      </div>
      <div className="window-controls">
        <button type="button" className="title-bar-button">-</button>
        <button type="button" className="title-bar-button">□</button>
        <button type="button" className="title-bar-button">x</button>
      </div>
    </div>
    <div className="status-bar">
      <span>Shows or hides an Explorer bar.</span>
      <div className="status-handle" />
    </div>
  </div>
);

export default WindowModal;
