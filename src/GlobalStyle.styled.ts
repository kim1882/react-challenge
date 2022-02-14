import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
  body {
    background-color: white;
    color: black;
    font-family: sans-serif;
    font-size: 1.4rem !important;
    width: 100%;
    height: 100vh;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
