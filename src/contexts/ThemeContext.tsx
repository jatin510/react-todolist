import { useState, createContext } from 'react';

export interface IThemeContext {
  theme: any;
  toggleTheme: any;
}

const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
