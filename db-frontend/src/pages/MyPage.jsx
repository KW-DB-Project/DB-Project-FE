import styled from "styled-components";
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import axios from 'axios';
import { useEffect } from "react";
import MyBalance from '../component/user-my-page/MyBalance';
import LikeStock from '../component/user-my-page/LikeStock';
import MyBoard from '../component/user-my-page/MyBoard';
import MyStock from '../component/user-my-page/MyStock';

function MyPage () {

    const login = useRecoilValue(isLoginedAtom);

    var likes = [];
    var boards = [];
    var bals = 0;
    var stocks = [];
    var rate = 0;
    var amount = 0;
  
    var getData = () => {
  
      //보유주식
      axios
      .post('/user/myStock', {
        id:login.id
      })
      .then((res) => {
        console.log("보유주식");
        console.log(res.data);
        rate=res.data.rateOfReturn;
        amount = res.data.appraisalAmount;
        stocks=res.data.myStockDto;
      })
      .catch((err) => {
        console.log(err);
      });
  
      //잔액
      axios
      .post('/user/depositReceived', {
        id:login.id
      })
      .then((res) => {
        console.log("잔액");
        console.log(res.data);
        bals=res.data.balance;
      })
      .catch((err) => {
        console.log(err);
      });
  
      //관심
      axios
      .post('/user/myInterest', {
        id:login.id
      })
      .then((res) => {
        console.log("관심");
        console.log(res.data);
        likes=res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  
      //내가 쓴 글
      axios
      .post('/user/myWriting', {
        id:login.id
      })
      .then((res) => {
        console.log("내가 쓴 글");
        console.log(res.data);
        boards=res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  
  
    }
  
    const Val =  {rate:rate,amount:amount,stocks:stocks};
  
    useEffect(getData(),[]);
  

    return (
        <MyPageLayout>
        <UserInfo>{login.username} {login.age}</UserInfo>
        <Container>
          <Box>
          <MyBalance bal={bals}></MyBalance>
          <MyStock stock={Val}></MyStock>
          </Box>
          <Box>
          <LikeStock like={likes}></LikeStock>
          <MyBoard board={boards}></MyBoard>
          </Box>
        </Container>
        </MyPageLayout>
    );
}

export default MyPage;

const UserInfo = styled.div`
font-weight:bold;
font-size:20px;
margin-bottom:10px;
margin-left:auto;
`;

const MyPageLayout = styled.div`
display: flex;
flex-direction: column;
width:70%;
padding-top: 150px;
padding-bottom: 160px;
margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  width:80%;
  @media screen and (max-width : 1100px){
    grid-template-columns : repeat(1, 540px);
  }
  @media screen and (min-width : 1100px){
    grid-template-columns : repeat(2, 540px);
  }
  justify-content : center;
  gap: 50px;
  margin-top: 25px;
`;

const Box = styled.div`
 
`;