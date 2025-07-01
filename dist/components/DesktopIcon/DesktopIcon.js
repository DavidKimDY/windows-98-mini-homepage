import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DesktopIcon = ({ label, icon, href }) => {
    const handleClick = () => {
        if (href) {
            window.open(href, '_blank');
        }
        else {
            alert(label);
        }
    };
    return (_jsxs("button", { type: "button", className: "desktop-icon", onClick: handleClick, children: [_jsx("img", { className: "icon-image", src: icon, alt: "" }), _jsx("span", { className: "icon-label", children: label })] }));
};
export default DesktopIcon;
