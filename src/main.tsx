import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './layout/AppLayout';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<AppLayout />);
}
