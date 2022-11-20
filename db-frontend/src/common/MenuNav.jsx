import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { isLoginedAtom } from '../atom/loginAtom';
import { useRecoilValue } from "recoil";

const MenuNav = () => {
  const login = useRecoilValue(isLoginedAtom);
  const location = useLocation();

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
      </StyledMenubar>
      <StyledMenuButton to="/usermy">
      <StyledFontawsome icon={faUser}  />
        {login.isLogined? <span>{`${login.userName}님 안녕하세요!`}</span> :null}
      </StyledMenuButton>
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
`;

const StyledMenuButton = styled(NavLink)`

`;

const StyledFontawsome = styled(FontAwesomeIcon)`

margin-top:40px;
width:30px;
height:30px;
position:absolute; 
margin-left:190px;

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
  
