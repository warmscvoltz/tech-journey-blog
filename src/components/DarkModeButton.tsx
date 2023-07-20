'use client';

import React, { useLayoutEffect} from 'react';
import {themeChange} from 'theme-change'

interface DarkModeButtonProps {
}

const DarkModeButton: React.FC<DarkModeButtonProps> = () => {
  let currentTheme;
  if (typeof window !== 'undefined') {
    currentTheme = localStorage?.getItem('theme');
  }

  useLayoutEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
      <div className="m-5 flex items-center">
        🌞
        <input data-toggle-theme="light,dark" type="checkbox" className="toggle mx-1"
               defaultChecked={currentTheme === 'dark'}/>
        🌚
      </div>
  );
};
export default DarkModeButton;
