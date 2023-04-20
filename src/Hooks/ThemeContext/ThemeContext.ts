import { FC, ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider: React.FC<ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider value={(theme, setTheme)}>{children}</ThemeContext.Provider>;
};
