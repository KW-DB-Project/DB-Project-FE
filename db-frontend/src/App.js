import {ThemeProvider} from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
