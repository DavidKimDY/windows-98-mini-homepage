import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DesktopIcon from '../DesktopIcon/DesktopIcon.js';
const Desktop = ({ onOpen }) => (_jsxs("div", { className: "desktop", children: [_jsx(DesktopIcon, { label: "\uB0B4 \uCEF4\uD4E8\uD130", icon: "./images/my-computer.png", onOpen: () => onOpen('내 컴퓨터') }), _jsx(DesktopIcon, { label: "\uB0B4 \uBB38\uC11C", icon: "./images/my-document.png", onOpen: () => onOpen('내 문서') }), _jsx(DesktopIcon, { label: "\uC778\uD130\uB137", icon: "./images/internet.png", href: "https://google.com" }), _jsx(DesktopIcon, { label: "\uC774\uBA54\uC77C", icon: "./images/email.png", href: "mailto:kdaeyoub@gmail.com" })] }));
export default Desktop;
