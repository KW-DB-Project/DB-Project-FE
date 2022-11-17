import {Route, Routes} from "react-router-dom"
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import StockDebatePage from "./pages/StockDebatePage";
import StockDebateView from "./pages/StockDebateView";
import StockDebateWrite from "./pages/StockDebateWrite";
import StockTradingPage from "./pages/StockTradingPage";
import StockViewPage from "./pages/StockViewPage";
import UserMyPage from "./pages/UserMyPage";

const Router = () => {
  return (
      <Routes>
        <Route path = '/' element={<MainPage/>}></Route>
        <Route path = '/login' element={<LoginPage/>}></Route>
        <Route path = '/join' element={<JoinPage/>}></Route>
        <Route path = '/debate' element={<StockDebatePage/>}></Route>
        <Route path = '/debate/write' element={<StockDebateWrite/>}></Route>
        <Route path = '/debate/:idx' element={<StockDebateView/>}></Route>
        <Route path = '/stocktrading/:type' element={<StockTradingPage/>}></Route>
        <Route path = '/stockview' element={<StockViewPage/>}></Route>
        <Route path = '/usermy' element={<UserMyPage/>}></Route>
      </Routes>
  );
}

export default Router;