import React from 'react';
import DesktopIcon from '../DesktopIcon/DesktopIcon';

interface Props {
  onOpen: (title: string) => void;
}

const Desktop: React.FC<Props> = ({ onOpen }) => (
  <div className="desktop">
    <DesktopIcon
      label="내 컴퓨터"
      icon="./images/my-computer.png"
      onOpen={() => onOpen('내 컴퓨터')}
    />
    <DesktopIcon
      label="내 문서"
      icon="./images/my-document.png"
      onOpen={() => onOpen('내 문서')}
    />
    <DesktopIcon
      label="인터넷"
      icon="./images/internet.png"
      href="https://google.com"
    />
    <DesktopIcon
      label="이메일"
      icon="./images/email.png"
      href="mailto:kdaeyoub@gmail.com"
    />
  </div>
);

export default Desktop;
