import React from "react";
import { lightDark } from "../Components/styles";
export const ThemeContext = React.createContext();

const themeValues = () => {
  lightDark();
};

function ThemeContextProvider({ children }) {
  const [currentTheme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  const value = {
    currentTheme,
    toggleTheme,
    theme: lightDark[currentTheme]
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContextProvider };
