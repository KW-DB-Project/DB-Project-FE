import styled from "styled-components";
import AdminBoard from '../component/admin-page/AdminBoard';
import AdminCom from '../component/admin-page/AdminCom';
import AdminUser from '../component/admin-page/AdminUser';
import {useRecoilValue, useSetRecoilState} from "recoil";
import { adminTab } from "../atom/adminAtom";

function AdminPage () {

    const tab = useRecoilValue(adminTab);
    const setAdminTab = useSetRecoilState(adminTab);

    const obj ={
        0: <AdminBoard />,
        1: <AdminCom />,
        2: <AdminUser />
    }    

    const Board = () => {setAdminTab({adminTab:0}); };
    const Com = () => {setAdminTab({adminTab:1}); };
    const User = () => {setAdminTab({adminTab:2}); };

    return (
        <Adminlayout className="AdminPage">
                <StyledMenubar>
                    <StyledMenuButton className={tab.adminTab === 2 ? 'selected' : 'notselected'} onClick={User}>회원관리</StyledMenuButton>
                    <StyledMenuButton className={tab.adminTab === 1 ? 'selected' : 'notselected'} onClick={Com}>주식회사 관리</StyledMenuButton>
                    <StyledMenuButton className={tab.adminTab === 0 ? 'selected' : 'notselected'} onClick={Board}>종목토론방 관리</StyledMenuButton>
                </StyledMenubar>
            {obj[tab.adminTab]}
        </Adminlayout>
      
    );
}

export default AdminPage;

//전체 화면 레이아웃
const Adminlayout = styled.div`
  flex-direction: column;
  width:60%;
  padding-top: 140px;
  padding-bottom: 160px;
  margin: 0 auto;
`;

//메뉴바
const StyledMenubar = styled.div`
    display:flex;
    width:100%;
    margin-bottom:10px;
`;

//버튼
const StyledMenuButton = styled.button`
  align-items:center;
  cursor: pointer;
  font-size:20px;
  font-weight:bold;
  text-align:center;
  border-radius:30px;
  width:30%;
  border:none;
  padding:7px;
  margin:10px;
  ${(props)=> {
    if(props.className === 'notselected'){
        return `background-color: rgb(217,217,217);
        `;
    }
    else if(props.className === 'selected'){
        return `background-color: black;
                 color:white;
        `;
    }
  }};
`;