// themprovider/ThemeSelector.js
import React from 'react';
import { useTheme } from './ThemeProvider'; // Import the useTheme hook

const ThemeSelector = () => {
  const { toggleTheme } = useTheme(); // Get toggleTheme function from context

  return (
    <div style={{ margin: '20px 0' }}>
      <label htmlFor="theme-select">Choose Theme: </label>
      <select
        id="theme-select"
        onChange={(e) => toggleTheme(e.target.value)} // When user selects a theme, toggle the theme
        style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
