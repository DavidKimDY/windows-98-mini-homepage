import React from 'react';
import DesktopIcon from '../DesktopIcon/DesktopIcon';

const Desktop: React.FC = () => (
  <div className="desktop">
    <DesktopIcon label="내 컴퓨터" />
    <DesktopIcon label="내 문서" />
    <DesktopIcon label="인터넷" />
    <DesktopIcon label="Notepad" />
  </div>
);

export default Desktop;
