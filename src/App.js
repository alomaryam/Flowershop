import productStore from "./stores/productStore.js";
// import Flowers from "./components/Products.js";
import FlowersList from "./components/ProductList.js";
import Home from "./components/Home.js";
import NavBar from "./components/Navbar.js";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

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
    color: "#B50054",
    mainColor: "#101C28",
    red: "red",
  },
  dark: {
    backgroundColor: "#090A0D",
    color: "#88AABF",
    mainColor: "#F4F4F4",
    red: "red",
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
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ProductList">
            <FlowersList flowers={productStore.flowers} />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default observer(App);
