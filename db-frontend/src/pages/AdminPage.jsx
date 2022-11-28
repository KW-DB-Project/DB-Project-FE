import { useState } from "react";
import styled from "styled-components";
import AdminBoard from '../component/admin-page/AdminBoard';
import AdminCom from '../component/admin-page/AdminCom';
import AdminUser from '../component/admin-page/AdminUser';

function AdminPage () {

    const [selTab,setSelTab]=useState(0);

    const obj ={
        0: <AdminBoard />,
        1: <AdminCom />,
        2: <AdminUser />
    }    

    const Board = () => {setSelTab(0); };
    const Com = () => {setSelTab(1); };
    const User = () => {setSelTab(2); };

    return (
        <Adminlayout className="AdminPage">
                <StyledMenubar>
                    <StyledMenuButton className={selTab === 2 ? 'selected' : 'notselected'} onClick={User}>회원관리</StyledMenuButton>
                    <StyledMenuButton className={selTab === 1 ? 'selected' : 'notselected'} onClick={Com}>주식회사 관리</StyledMenuButton>
                    <StyledMenuButton className={selTab === 0 ? 'selected' : 'notselected'} onClick={Board}>종목토론방 관리</StyledMenuButton>
                </StyledMenubar>
            {obj[selTab]}
        </Adminlayout>
      
    );
}

export default AdminPage;

//전체 화면 레이아웃
const Adminlayout = styled.div`
  flex-direction: column;
  width:45%;
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