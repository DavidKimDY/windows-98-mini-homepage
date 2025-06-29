import React from 'react';
import StartButton from './StartButton';
import TimeDisplay from './TimeDisplay';

interface Props {
  onStartClick: () => void;
}

const Taskbar: React.FC<Props> = ({ onStartClick }) => (
  <div className="taskbar">
    <StartButton onClick={onStartClick} />
    <div style={{ flexGrow: 1 }} />
    <TimeDisplay />
  </div>
);

export default Taskbar;
