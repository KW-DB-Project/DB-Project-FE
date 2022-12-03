import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeo from '../fonts/spoqa/SpoqaHanSansNeo-Regular.woff2';
const GlobalStyle = createGlobalStyle` 
  @font-face {
    font-family: "Spoqa Han Sans Neo";
    src: url(${SpoqaHanSansNeo});
  }

  body
  {
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