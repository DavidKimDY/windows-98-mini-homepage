import React from 'react';

interface Props {
  label: string;
}

const DesktopIcon: React.FC<Props> = ({ label }) => {
  const handleClick = () => {
    alert(label);
  };

  return (
    <button type="button" className="desktop-icon" onClick={handleClick}>
      <div className="icon-placeholder" />
      <span className="icon-label">{label}</span>
    </button>
  );
};

export default DesktopIcon;
