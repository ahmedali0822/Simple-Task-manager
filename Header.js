import React from 'react';

const Header = ({ darkMode, onToggleDarkMode }) => {
  return (
    <header>
      <h1>Simple Task Manager</h1>
      <button onClick={onToggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;