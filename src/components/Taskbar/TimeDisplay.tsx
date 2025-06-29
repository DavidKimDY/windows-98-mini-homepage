import React, { useEffect, useState } from 'react';

const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const t = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      setTime(t);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return <div className="time-display">{time}</div>;
};

export default TimeDisplay;
