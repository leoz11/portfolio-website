import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
