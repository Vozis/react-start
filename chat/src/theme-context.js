import { createContext, useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const defaultValue = "light";

export const ThemeContext = createContext(defaultValue);

const themes = {
  dark: {
    color: "#fff",
  },
  light: {
    color: "#000",
  },
};

export const themesMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#141414",
      },
      secondary: {
        main: "#5181B9",
      },
      text: {
        main: "#ffffff",
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#56a2ec",
      },
      secondary: {
        main: "#002cc4",
      },
      text: {
        main: "#000",
      },
    },
  }),
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const [themeMui, setThemeMui] = useState(themesMUI[theme.name]);

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
      setThemeMui(themesMUI[name]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter, themeMui }}>
      <ThemeProvider theme={themeMui}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
