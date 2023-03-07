import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { HeaderBlock } from "./components/Header";
import { MainBlock } from "./components/MainBlock";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderBlock switchTheme={switchTheme} />
      <MainBlock />
    </ThemeProvider>
  );
}
export default App;
