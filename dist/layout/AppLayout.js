import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Wallpaper from '../components/Wallpaper.js';
import Desktop from '../components/Desktop/Desktop.js';
import WindowArea from '../components/WindowArea/WindowArea.js';
import Taskbar from '../components/Taskbar/Taskbar.js';
import StartMenu from '../components/StartMenu/StartMenu.js';
import PointerTheme from '../components/PointerTheme/PointerTheme.js';
const AppLayout = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (_jsxs("div", { style: { position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }, children: [
    _jsx(Wallpaper, {}),
    _jsx(Desktop, {}),
    _jsx(WindowArea, {}),
    _jsx(Taskbar, { onStartClick: toggleMenu }),
    showMenu && _jsx(StartMenu, {}),
    _jsx(PointerTheme, {})
  ] }));
};
export default AppLayout;
