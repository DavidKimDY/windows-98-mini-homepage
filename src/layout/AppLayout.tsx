import React from 'react';
import Wallpaper from '../components/Wallpaper';
import Desktop from '../components/Desktop/Desktop';
import WindowArea from '../components/WindowArea/WindowArea';
import Taskbar from '../components/Taskbar/Taskbar';
import PointerTheme from '../components/PointerTheme/PointerTheme';

const AppLayout: React.FC = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
    <Wallpaper />
    <Desktop />
    <WindowArea />
    <Taskbar />
    <PointerTheme />
  </div>
);

export default AppLayout;
