import { useEffect, useState } from "react";
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../../../atom/loginAtom';
import axios from 'axios';

function BalTab () {

    const [userBal,setUserBal] = useState(0);
    const login = useRecoilValue(isLoginedAtom);

    useEffect(() => {

        const userId = login.id;
      //잔액
      axios
      .post('/user/depositReceived', {
        id:userId
      })
      .then((res) => {
        console.log("잔액");
        console.log(res.data);
        setUserBal(res.data.balance);
        login.balance
      })
      .catch((err) => {
        console.log(err);
      });

    });

    return(
        <div>
        <LittleTitle>{userBal}원</LittleTitle>
        </div>
    );
}

export default BalTab;

//소제목
const LittleTitle = styled.div`
font-size:15px;
margin-top:3px;
width:30%;
text-algin:right;
`;