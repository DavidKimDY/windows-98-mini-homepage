import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import AppLayout from './layout/AppLayout.js';
const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(_jsx(AppLayout, {}));
}
