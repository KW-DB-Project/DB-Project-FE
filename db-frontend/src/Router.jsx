import {BrowserRouter, Route, Routes} from "react-router-dom"
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import StockDebatePage from "./pages/StockDebatePage";
import StockTradingPage from "./pages/StockTradingPage";
import StockViewPage from "./pages/StockViewPage";
import UserMyPage from "./pages/UserMyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<MainPage/>}></Route>
        <Route path = '/login' element={<LoginPage/>}></Route>
        <Route path = '/join' element={<JoinPage/>}></Route>
        <Route path = '/debate/*' element={<StockDebatePage/>}></Route>
        <Route path = '/trading/*' element={<StockTradingPage/>}></Route>
        <Route path = '/view/*' element={<StockViewPage/>}></Route>
        <Route path = '/mypage' element={<UserMyPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;