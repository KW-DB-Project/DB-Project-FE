import { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../../../atom/loginAtom';

function ChargeTab () {

    const [amount,setAmount]=useState(1);
    const login = useRecoilValue(isLoginedAtom);
   
    const onChange = (e) => {
      
      setAmount(e.target.value);
        
      };

    const onClick = () => {
        alert((amount*10000)+'원');
        setLoginAtom({
          isLogined : true,
          userName : login.userName,
          id : login.id,
          password: login.pw,
          age : login.age,
          balance : login.balance + (amount*10000)
        });

    axios
    .post('/user/addDepositReceived', {
      id:login.id,
      balance:login.balance
    })
    .then((res) => {
      console.log(res.data);

      if(!res.data.isSuccess){
        alert('오류가 발생했습니다.');
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
    };

    return(
        <div style={{display:'flex'}}>
        <LittleTitle><Styledinput type="number" onChange={onChange} name="amount" value={amount}></Styledinput>만원</LittleTitle><RightLayout><StyledBtn onClick={onClick}>충전하기</StyledBtn></RightLayout>
        </div>
    );
}

export default ChargeTab;

//충전 버튼
const StyledBtn = styled.button`
  font-size:10px;
  text-align:center;
  border-radius:30px;
  width:30%;
  border:none;
  padding:5px;
  background-color: black;
  color:white;

`;

//소제목
const LittleTitle = styled.div`
font-size:15px;
margin-left:5px;
`;

//인풋
const Styledinput = styled.input`
font-size:15px;
outline:none;
border: 0 solid black;
background-color:rgb(217,217,217);
text-align:right;
width:30%
`;

//오른 정렬 레이아웃
const RightLayout = styled.div`
  width:40%;
  height:40px;
  text-align:right;
  margin-left:auto;
`;