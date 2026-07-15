"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext('light');

export default function Provider({ children }) {
  const [theme, setTheme] = useState('light');
  console.log('theme changed', theme)
  return (
    <ThemeContext.Provider value={theme}>
      {children}
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>Toggle</button>
    </ThemeContext.Provider>
  );
}