import React from 'react';

interface Props {
  label: string;
}

const DesktopIcon: React.FC<Props> = ({ label }) => (
  <button
    type="button"
    className="desktop-icon"
    onClick={() => alert(label)}
  >
    <div className="icon-placeholder" />
    <span style={{ fontSize: '12px', textAlign: 'left' }}>{label}</span>
  </button>
);

export default DesktopIcon;
