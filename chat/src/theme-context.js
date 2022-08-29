import { createContext, useCallback, useContext, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material";

const defaultValue = "default value";
export const ThemeContext = createContext(defaultValue);

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
};

export const themeMUI = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#17212b",
    // },
    // secondary: {
    //   main: "#0e1621",
    // },
  },
});

// export const themeMUI = {
//   dark: createTheme({
//     palette: {
//       primary: {
//         main: "#17212b",
//       },
//       secondary: {
//         main: "#0e1621",
//       },
//     },
//   }),
//   light: createTheme({
//     palette: {
//       primary: {
//         main: "#17212b",
//       },
//       secondary: {
//         main: "#0e1621",
//       },
//     },
//   }),
// };

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themeMUI}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
