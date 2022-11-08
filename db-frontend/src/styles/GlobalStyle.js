import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background-color : ${(props) => props.theme.bgColor};
    color : black;
    margin-top: 20px; 
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