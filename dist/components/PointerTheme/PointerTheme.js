import { useEffect } from 'react';
const cursorData = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMicgaGVpZ2h0PSczMic+PHBvbHlnb24gZmlsbD0nd2hpdGUnIHN0cm9rZT0nYmxhY2snIHBvaW50cz0nMCwwIDAsMjQgNiwxOCAxMiwzMiAxNiwzMCAxMCwxOCAxOCwxOCcvPjwvc3ZnPg==';
const PointerTheme = () => {
    useEffect(() => {
        const prev = document.body.style.cursor;
        document.body.style.cursor = `url(${cursorData}) 0 0, auto`;
        return () => {
            document.body.style.cursor = prev;
        };
    }, []);
    return null;
};
export default PointerTheme;
