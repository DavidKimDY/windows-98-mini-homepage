import React from 'react';

interface Props {
  onClick: () => void;
}

const StartButton: React.FC<Props> = ({ onClick }) => (
  <button type="button" className="start-button" onClick={onClick}>
    <img className="start-icon" src="./images/windows-logo.png" alt="" />
    시작
  </button>
);

export default StartButton;
