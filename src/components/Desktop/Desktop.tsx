import React from 'react';
import DesktopIcon from '../DesktopIcon/DesktopIcon';

const Desktop: React.FC = () => (
  <div className="desktop">
    <DesktopIcon label="내 컴퓨터" icon="./images/my-computer.png" />
    <DesktopIcon label="내 문서" icon="./images/my-document.png" />
    <DesktopIcon label="인터넷" icon="./images/internet.png" />
    <DesktopIcon label="이메일" icon="./images/my-email.png" href="mailto:kdaeyoub@gmail.com" />
  </div>
);

export default Desktop;
