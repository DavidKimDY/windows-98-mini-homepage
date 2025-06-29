import React from 'react';
import StartButton from './StartButton';
import TimeDisplay from './TimeDisplay';

const Taskbar: React.FC = () => (
  <div className="taskbar">
    <StartButton />
    <div style={{ flexGrow: 1 }} />
    <TimeDisplay />
  </div>
);

export default Taskbar;
