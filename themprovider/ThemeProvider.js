// themprovider/ThemeProvider.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Inline styles for themes using CSS variables
const themes = {
  light: {
    '--background-color': 'white',
    '--text-color': 'black',
  },
  dark: {
    '--background-color': '#121212',
    '--text-color': 'white',
  },
  blue: {
    '--background-color': '#e0f7fa',
    '--text-color': '#007bb2',
  },
  green: {
    '--background-color': '#e8f5e9',
    '--text-color': '#2e7d32',
  },
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);

    // Apply theme styles dynamically using CSS variables
    const selectedThemeStyles = themes[selectedTheme];
    Object.keys(selectedThemeStyles).forEach((property) => {
      document.documentElement.style.setProperty(property, selectedThemeStyles[property]);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the context so it can be used in other components
export const useTheme = () => React.useContext(ThemeContext);
