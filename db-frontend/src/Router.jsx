import {Route, Routes} from "react-router-dom"
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import StockDebatePage from "./pages/StockDebatePage";
import StockTradingPage from "./pages/StockTradingPage";
import StockViewPage from "./pages/StockViewPage";
import UserMyPage from "./pages/UserMyPage";

const Router = () => {
  return (
      <Routes>
        <Route path = '/' element={<MainPage/>}></Route>
        <Route path = '/login' element={<LoginPage/>}></Route>
        <Route path = '/join' element={<JoinPage/>}></Route>
        <Route path = '/debate/*' element={<StockDebatePage/>}></Route>
        <Route path = '/stocktrading' element={<StockTradingPage/>}></Route>
        <Route path = '/stockview' element={<StockViewPage/>}></Route>
        <Route path = '/usermy' element={<UserMyPage/>}></Route>
      </Routes>
  );
}

export default Router;