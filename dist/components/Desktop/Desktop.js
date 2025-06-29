import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DesktopIcon from '../DesktopIcon/DesktopIcon.js';
const Desktop = () => (
  _jsxs("div", {
    className: "desktop",
    children: [
      _jsx(DesktopIcon, { label: "\uB0B4 \uCEF4\uD4E8\uD130", icon: "./images/my-computer.svg" }),
      _jsx(DesktopIcon, { label: "\uB0B4 \uBB38\uC11C", icon: "./images/my-docs.svg" }),
      _jsx(DesktopIcon, { label: "\uC778\uD130\uB137", icon: "./images/internet.svg" }),
      _jsx(DesktopIcon, { label: "\uC774\uBA54\uC77C", icon: "./images/my-email.svg", href: "mailto:kdaeyoub@gmail.com" })
    ]
  })
);
export default Desktop;
