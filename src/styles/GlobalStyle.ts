import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-image: url(./images/background.webp);
  background-attachment: fixed;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  body,
  h1,
  h2 {
    margin: 0;
  }

  input {
    font-size: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    font: inherit;
  }  
  `;
export default GlobalStyle;
