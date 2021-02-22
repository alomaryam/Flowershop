import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
// body {
//   font-family: Kunstler Script;
//   color: #2c2a30;
//   background-color: ${(props) => props.theme.backgroundColor};
// }
// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
// `;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
