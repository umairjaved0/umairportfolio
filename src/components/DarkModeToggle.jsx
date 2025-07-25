import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './darkToggle.css';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
