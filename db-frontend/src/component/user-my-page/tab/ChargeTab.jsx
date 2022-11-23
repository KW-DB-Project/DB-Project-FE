import { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

function ChargeTab (props) {

    const [amount,setAmount]=useState(1);
   
    const onChange = (e) => {
      
      setAmount(e.target.value);
        
      };

    const onClick = () => {
        alert((amount*10000)+'원');

      axios
    .post('/user/addDepositReceived', {
      id:props.id
    })
    .then((res) => {
      console.log(res.data);
      
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