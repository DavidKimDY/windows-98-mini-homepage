import React from 'react';

const StartMenu: React.FC = () => (
  <div className="start-menu">
    <div className="start-menu-bar">
      <span className="bar-text">Windows98</span>
    </div>
    <ul className="start-menu-list">
      <li className="start-menu-item"><span className="item-icon" />프로그램(P)  <span className="item-arrow" /></li>
      <li className="start-menu-item"><span className="item-icon" />즐겨찾기(A)  <span className="item-arrow" /></li>
      <li className="start-menu-item"><span className="item-icon" />문서(D)</li>
      <li className="start-menu-item"><span className="item-icon" />설정(S) <span className="item-arrow" /></li>
      <li className="start-menu-item"><span className="item-icon" />찾기(F)</li>
      <li className="start-menu-item"><span className="item-icon" />도움말(H)</li>
      <li className="start-menu-item"><span className="item-icon" />실행(R)</li>
      <hr className="start-menu-separator" />
      <li className="start-menu-item"><span className="item-icon" />로그오프(L)</li>
      <li className="start-menu-item"><span className="item-icon" />시스템 종료(U)</li>
    </ul>
  </div>
);

export default StartMenu;
