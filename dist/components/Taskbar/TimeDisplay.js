import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const TimeDisplay = () => {
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
  return _jsx("div", { className: "time-display", children: time });
};
export default TimeDisplay;
