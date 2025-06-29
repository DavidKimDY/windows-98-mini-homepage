import React from 'react';

interface Props {
  label: string;
  icon: string;
  href?: string;
}

const DesktopIcon: React.FC<Props> = ({ label, icon, href }) => {
  const handleClick = () => {
    if (href) {
      window.open(href);
    } else {
      alert(label);
    }
  };

  return (
    <button type="button" className="desktop-icon" onClick={handleClick}>
      <img className="icon-image" src={icon} alt="" />
      <span className="icon-label">{label}</span>
    </button>
  );
};

export default DesktopIcon;
