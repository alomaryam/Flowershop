import FlowersList from "./components/ProductList.js";
import Home from "./components/Home.js";
import { ThemeButton } from "./components/Styles.js";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: Kunstler Script;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const theme = {
  light: {
    backgroundColor: "#ECEDF3",
    color: "#2c2a30",
    mainColor: "#101C28",
  },
  dark: {
    backgroundColor: "#090A0D",
    color: "#88AABF",
    mainColor: "#F4F4F4",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
        <Home />
        <FlowersList />
      </ThemeProvider>
    </div>
  );
}

export default App;
