import React from 'react';
import DesktopIcon from '../DesktopIcon/DesktopIcon';

const Desktop: React.FC = () => (
  <div className="desktop">
    <DesktopIcon label="내 컴퓨터" icon="./images/my-computer.svg" />
    <DesktopIcon label="내 문서" icon="./images/my-docs.svg" />
    <DesktopIcon label="인터넷" icon="./images/internet.svg" />
    <DesktopIcon label="이메일" icon="./images/my-email.svg" href="mailto:kdaeyoub@gmail.com" />
  </div>
);

export default Desktop;
