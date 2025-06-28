import React from 'react';

interface Props {
  label: string;
}

const DesktopIcon: React.FC<Props> = ({ label }) => (
  <div className="desktop-icon">
    <div className="icon-placeholder" />
    <span style={{ fontSize: '12px', textAlign: 'center' }}>{label}</span>
  </div>
);

export default DesktopIcon;
