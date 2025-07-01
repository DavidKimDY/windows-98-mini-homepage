import { jsx as _jsx } from "react/jsx-runtime";
import WindowModal from '../WindowModal/WindowModal.js';
const WindowArea = ({ title, onClose }) => (_jsx("div", { className: "window-area", children: title && _jsx(WindowModal, { title: title, onClose: onClose }) }));
export default WindowArea;
