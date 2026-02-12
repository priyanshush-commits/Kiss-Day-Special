
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'theme-pink' | 'theme-red' | 'theme-purple' | 'theme-night';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('theme-pink');

  useEffect(() => {
    const saved = localStorage.getItem('kiss-day-theme') as Theme;
    if (saved) setThemeState(saved);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('kiss-day-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} min-h-screen relative`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
