import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";
import MenuNav from "./common/MenuNav";
import BackgroundLayout from "./common/BackgroundLayout";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BackgroundLayout className="App">
      <ThemeProvider theme = {defaultTheme}>
        <GlobalStyle />
          <BrowserRouter>
            <MenuNav />
            <Router/>
          </BrowserRouter>
      </ThemeProvider>
    </BackgroundLayout>
  );
}

export default App;
