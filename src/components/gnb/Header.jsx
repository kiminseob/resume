import React from 'react';
import Language from './Language';
import DarkMode from './DarkMode';

function Header() {
  return (
    <header>
      <DarkMode />
      <Language />
    </header>
  );
}

export default Header;
