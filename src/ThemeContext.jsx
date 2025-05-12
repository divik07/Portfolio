// ThemeContext.jsx
import React, { createContext, useState, useLayoutEffect, useCallback } from 'react';

// Create context for theme
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Provider component
export function ThemeProvider({ children }) {
  // Initialize theme from localStorage (or default to 'light')
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });

  // Apply dark class synchronously before paint
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore write errors
    }
  }, [theme]);

  // Toggle between dark and light
  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}