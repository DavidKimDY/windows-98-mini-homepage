import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StartButton from './StartButton.js';
import TimeDisplay from './TimeDisplay.js';
const Taskbar = () => (
  _jsxs("div", {
    className: "taskbar",
    children: [
      _jsx(StartButton, {}),
      _jsx("div", { style: { flexGrow: 1 } }),
      _jsx(TimeDisplay, {})
    ]
  })
);
export default Taskbar;
