import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background-color : white;
    color : black;
  }
  
  *{
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;