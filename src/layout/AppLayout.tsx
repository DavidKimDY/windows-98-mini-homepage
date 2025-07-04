import React from 'react';
import Wallpaper from '../components/Wallpaper';
import Desktop from '../components/Desktop/Desktop';
import WindowArea from '../components/WindowArea/WindowArea';
import Taskbar from '../components/Taskbar/Taskbar';
import PointerTheme from '../components/PointerTheme/PointerTheme';
import StartMenu from '../components/StartMenu/StartMenu';

const AppLayout: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [activeTitle, setActiveTitle] = React.useState<string | null>(null);
  const handleOpen = (title: string) => setActiveTitle(title);
  const handleClose = () => setActiveTitle(null);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Wallpaper />
      <Desktop onOpen={handleOpen} />
      <WindowArea title={activeTitle} onClose={handleClose} />
      <Taskbar onStartClick={toggleMenu} />
      {showMenu && <StartMenu />}
      <PointerTheme />
    </div>
  );
};

export default AppLayout;
