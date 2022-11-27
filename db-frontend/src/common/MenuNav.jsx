import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { isLoginedAtom } from '../atom/loginAtom';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";

const MenuNav = () => {
  const login = useRecoilValue(isLoginedAtom);
  const location = useLocation();
  const [isLogined, setIsLogined] = useState(false);
  const setLoginAtom = useSetRecoilState(isLoginedAtom);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogined(login.isLogined);
  }, [])

  const onClickLogout = ()  => {
    setLoginAtom({
      isLogined : false,
      userName : null,
      id : null,
      password: null,
      age : null,
      balance : null
    });
    setIsLogined(false);
    navigate(-1);
  }

    return (
      <MenubarLayout>
        <StyledMenubar>
          <StyledMenuButton to="/" >
          {location.pathname === '/' ? <ClickMenuName>홈</ClickMenuName> : <MenuName>홈</MenuName> }
          </StyledMenuButton>
          <StyledMenuButton to="/stockview" >
          {location.pathname === '/stockview' ? <ClickMenuName>국내</ClickMenuName> : <MenuName>국내</MenuName> }
          </StyledMenuButton>
          <StyledMenuButton to="/stocktrading" >
          {location.pathname === '/stocktrading' ? <ClickMenuName>매매</ClickMenuName> : <MenuName>매매</MenuName> }
          </StyledMenuButton>
          <StyledMenuButton to="/enterprise" >
          {location.pathname === '/enterprise' ? <ClickMenuName>기업</ClickMenuName> : <MenuName>기업</MenuName> }
          </StyledMenuButton>
        </StyledMenubar>
        <StyledMenuButtonProfile>
          {isLogined? <span>{`${login.userName}님 안녕하세요!`}</span> :null}
          <NavLink to = "/usermy"><StyledFontawsome icon={faUser}  /></NavLink>
          {isLogined ? <div><StyledFontawsome icon = {faArrowRightFromBracket} onClick = {onClickLogout}/> </div> : null}
        </StyledMenuButtonProfile>
      </MenubarLayout>
    );
  };
  
  export default MenuNav;

  const MenubarLayout = styled.div`
  background-color:white;
  width:100%;
  position:fixed;
  display:flex;
  justify-content:center;
  z-index: 1;
`;


const StyledMenubar = styled.nav`
    display:flex;
    width : 100%;
    justify-content: center;
`;

const StyledMenuButton = styled(NavLink)`
  display:flex;
  align-items:center;
`;

const StyledMenuButtonProfile = styled.div`
  display:flex;
  align-items:center;
  position: absolute;
  width: 300px;
  justify-content: space-between;
  right: 450px;
  top : 40px;
`;

const StyledFontawsome = styled(FontAwesomeIcon)`
  width:30px;
  height:30px;
  cursor: pointer;
`;

const MenuName = styled.div`

  font-size: 20px;
  font-weight:bold;
  margin:15px;
  margin-top:20px;
  width:120px;
  height:65px;
  padding:20px;
  text-align:center;

`;

const ClickMenuName = styled.div`
border-radius:15px 15px 15px 15px;  
  font-size: 20px;
  font-weight:bold;
  margin:15px;
  width:120px;
  height:65px;
  text-align:center;
  padding:20px;
  background-color: rgb(238,238,238);
`;
  
