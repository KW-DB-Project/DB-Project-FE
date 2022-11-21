import {Route, Routes} from "react-router-dom"
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import StockEnterprise from "./pages/StcokEnterprise";
import StockDebatePage from "./pages/StockDebatePage";
import StockDebateView from "./pages/StockDebateView";
import StockDebateWrite from "./pages/StockDebateWrite";
import StockEnterpriseList from "./pages/StockEnterpriseList";
import StockTradingPage from "./pages/StockTradingPage";
import StockViewPage from "./pages/StockViewPage";
import UserMyPage from "./pages/UserMyPage";

const Router = () => {
  return (
      <Routes>
        <Route path = '/' element={<MainPage/>}></Route>
        <Route path = '/login' element={<LoginPage/>}></Route>
        <Route path = '/join' element={<JoinPage/>}></Route>
        <Route path = '/debate/:stock' element={<StockDebatePage/>}></Route>
        <Route path = '/debate/:stock/write' element={<StockDebateWrite/>}></Route>
        <Route path = '/debate/:stock/:idx' element={<StockDebateView/>}></Route>
        <Route path = '/stocktrading' element={<StockTradingPage/>}></Route>
        <Route path = '/stockview' element={<StockViewPage/>}></Route>
        <Route path = '/usermy' element={<UserMyPage/>}></Route>
        <Route path = "/enterprise" element={<StockEnterpriseList/>}>
          <Route path = ":code" element={<StockEnterprise/>}></Route>
        </Route>
      </Routes>
  );
}

export default Router;