import React from 'react';

const WindowModal: React.FC = () => (
  <div className="window-modal">
      <div className="title-bar">
        <span>Notepad</span>
        <button className="close-btn">x</button>
      </div>
      <div className="content">Hello from Notepad</div>
  </div>
);

export default WindowModal;
