import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const TimeDisplay = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        const update = () => {
            const now = new Date();
            const t = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const d = now.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });
            setTime(t);
            setDate(d);
        };
        update();
        const id = setInterval(update, 60000);
        return () => clearInterval(id);
    }, []);
    return (_jsx("div", { className: "time-display", title: date, children: time }));
};
export default TimeDisplay;
