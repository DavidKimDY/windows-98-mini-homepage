import React from 'react';
import WindowModal from '../WindowModal/WindowModal';

interface Props {
  title: string | null;
  onClose: () => void;
}

const WindowArea: React.FC<Props> = ({ title, onClose }) => (
  <div className="window-area">
    {title && <WindowModal title={title} onClose={onClose} />}
  </div>
);

export default WindowArea;
