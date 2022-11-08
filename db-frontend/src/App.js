import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";
import Join from './pages/JoinPage';
import Login from './pages/LoginPage';
import Main from './pages/MainPage';
import StockDebate from './pages/StockDebatePage';
import StockTrading from './pages/StockTradingPage';
import StockView from './pages/StockViewPage';
import UserMy from './pages/UserMyPage';
import {Route, Routes} from 'react-router-dom';
import MenuNav from "./common/MenuNav";
import BackgroundLayout from "./common/BackgroundLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BackgroundLayout className="App">
      <ThemeProvider theme = {defaultTheme}>
        <GlobalStyle />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/join" element={<Join />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/stockdebate" element={<StockDebate />}/>
            <Route path="/stocktrading" element={<StockTrading />}/>
            <Route path="/stockview" element={<StockView />}/>
            <Route path="/usermy" element={<UserMy />}/>
          </Routes>
          <MenuNav />
          </BrowserRouter>
      </ThemeProvider>
    </BackgroundLayout>
  );
}

export default App;
