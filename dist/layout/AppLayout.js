import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Wallpaper from '../components/Wallpaper';
import Desktop from '../components/Desktop/Desktop';
import WindowArea from '../components/WindowArea/WindowArea';
import Taskbar from '../components/Taskbar/Taskbar';
import PointerTheme from '../components/PointerTheme/PointerTheme';
const AppLayout = () => (_jsxs("div", { style: { position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }, children: [_jsx(Wallpaper, {}), _jsx(Desktop, {}), _jsx(WindowArea, {}), _jsx(Taskbar, {}), _jsx(PointerTheme, {})] }));
export default AppLayout;
