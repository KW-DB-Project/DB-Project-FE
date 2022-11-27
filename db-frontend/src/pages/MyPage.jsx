import styled from "styled-components";
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import axios from 'axios';
import { useEffect, useState } from "react";
import MyBalance from '../component/user-my-page/MyBalance';
import LikeStock from '../component/user-my-page/LikeStock';
import MyBoard from '../component/user-my-page/MyBoard';
import MyStock from '../component/user-my-page/MyStock';

function MyPage () {

    const login = useRecoilValue(isLoginedAtom);
    const userId = login.id;
    const userName =login.userName;

    return (
        <MyPageLayout>
        <Container>
          <Box>
          <MyBalance></MyBalance>
          <MyStock></MyStock>
          </Box>
          <Box>
          <LikeStock></LikeStock>
          <MyBoard></MyBoard>
          </Box>
        </Container>
        </MyPageLayout>
    );
}

export default MyPage;

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