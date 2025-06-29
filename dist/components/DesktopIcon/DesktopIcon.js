import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DesktopIcon = ({ label }) => {
    const handleClick = () => {
        alert(label);
    };
    return (_jsxs("button", { type: "button", className: "desktop-icon", onClick: handleClick, children: [_jsx("div", { className: "icon-placeholder" }), _jsx("span", { className: "icon-label", children: label })] }));
};
export default DesktopIcon;
