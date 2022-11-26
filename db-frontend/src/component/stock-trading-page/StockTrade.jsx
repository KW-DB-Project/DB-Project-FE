import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import {useRecoilValue, useSetRecoilState} from "recoil";
import { isLoginedAtom } from '../../atom/loginAtom'

function StockTrade ({s_cd,s_price}){
const login = useRecoilValue(isLoginedAtom);
const setLoginAtom = useSetRecoilState(isLoginedAtom);

const [amount,setAmount]=useState(1);
const [selectedType,setSelectedType]=useState('매수');
const [userBal,setUserBal]=useState(0); // 사용자의 잔액
const [userSnum,setUserSnum]=useState(0); //사용자의 보유 주식 수


  //인풋 이벤트
  const onChange = (e) => {
    setAmount(e.target.value);
  };

  //매수 버튼 이벤트 함수
  const BuyClick = () => {
       
        setSelectedType('매수');
        console.log(selectedType);
  }
  //매도 버튼 이벤트 함수
  const SellClick = () => {
      setSelectedType('매도');
      console.log(selectedType);
  }

  useEffect(() => {
    //잔액 확인
    /*axios
    .all([axios.post('/trade/balance', { id:login.id}), axios.post('/trade/num', {id:login.id,cd:s_cd})])
    .then((res1,res2) => {
      console.log(res1.data);
      console.log(res2.data);
      setUserBal(res1.data.balance); 
      setUserSnum(res2.data.num);
    
    })
      .catch((err) => {
        console.log(err);
      });*/

      //구매
      axios
      .post('/trade/balance',{
        id:login.id
      })
      .then((res) => { 
        setUserBal(res.data.balance); 
        setLoginAtom({
          isLogined : true,
          userName : login.userName,
          id : login.id,
          password: login.pw,
          age : login.age,
          balance : res.data.balance
        });
      })
      .catch((err) => {
        console.log(err);
      });

      //구매
      axios
      .post('/trade/num',{
        id:login.id,
        cd:s_cd
      })
      .then((res) => {
        setUserSnum(res.data.stkNum); 
      })
      .catch((err) => {
        console.log(err);
      });

  },[]);

  //주문 버튼 이벤트
  const Trade = () => {

    if(true){

    if(selectedType === '매수'){
        alert('매수: '+amount+'주');

          if(userBal > (s_price*amount)){

            //구매
            axios
            .post('/trade/buy',{
              id:login.id,
              cd:s_cd,
              price:s_price,
              num:amount
            })
            .then((res) => {
              console.log(res.data);

            if(res.data.isSuccess){
               // setUserSnum(userBal-(s_price*amount));
                setUserSnum(userSnum+amount);
                setLoginAtom({
                  isLogined : true,
                  userName : login.userName,
                  id : login.id,
                  password: login.pw,
                  age : login.age,
                  balance : userBal-(s_price*amount)
                });
            }
            else{
              alert('거래 실패');
            }

            })
            .catch((err) => {
              console.log(err);
            });

          }
          else{
            alert('잔액이 부족합니다.');
          }
    
      }
    else if(selectedType === '매도'){
        alert('매도: '+amount+'주');

          if(userSnum >= amount){ 
          
            //판매
            axios
            .post('/trade/sell',{
              id:login.id,
              cd:s_cd,
              price:s_price,
              num:amount
            })
            .then((res) => {
              console.log(res.data);

            if(res.data.isSuccess){
               // setUserSnum(userSnum+amount);
                setUserBal(userBal+(s_price * amount));
                setLoginAtom({
                  isLogined : true,
                  userName : login.userName,
                  id : login.id,
                  password: login.pw,
                  age : login.age,
                  balance : userBal+(s_price*amount)
                });
                
            }
            else{
              alert('거래 실패');
            }

            })
            .catch((err) => {
              console.log(err);
            });
          }
          else{
            alert('판매 주식 수가 보유 주식 수 보다 많습니다.');
          }
    }
    else{
        alert('매수, 매도 알수없음');
    }

  }
  else{
    alert('로그인 후 이용해주십시오.');
  }

  }

  return(
   <StockTradeCom className="StockTradeComponent">
    <StyledLayout>
        <Box>  
        <StyledBtn style={{backgroundColor:'rgb(252,190,190)'}} onClick={BuyClick} >매수</StyledBtn>
        <StyledBtn style={{backgroundColor:'rgb(190,222,252)',marginLeft:'40px'}} onClick={SellClick}>매도</StyledBtn>
        </Box>
        <Box>
        <TitleLayout><Title>보유수량</Title></TitleLayout>
        <InputLayout>
         <RightLayout><Title style={{marginRight:'15px'}}>{userSnum}주</Title></RightLayout> 
        </InputLayout>
        </Box>
        <Box>
        <TitleLayout><Title>잔액</Title></TitleLayout>
        <InputLayout>
          <RightLayout><Title style={{marginRight:'15px'}}>{login.balance}원</Title></RightLayout>
        </InputLayout>
        </Box>
        <Box>
        <TitleLayout><Title>주문수량</Title></TitleLayout>
        <InputLayout>
          <StyledInput type="number" onChange={onChange} name="amount" value={amount}></StyledInput><Title style={{marginRight:'15px'}}>주</Title>
        </InputLayout>
        </Box>
        <Box>
        <TitleLayout><Title>주문가격</Title></TitleLayout>
        <InputLayout>
          <StyledInput type="number" onChange={onChange} name="amount" value={amount*s_price} disabled></StyledInput><Title style={{marginRight:'15px'}}>원</Title>
        </InputLayout>
        </Box>
        <Box>
        <StyledBtn className={selectedType === '매수' ? 'buy' : 'sell'} onClick={Trade} >주문</StyledBtn>
        </Box>
      </StyledLayout>
      </StockTradeCom>
  );

    }

export default StockTrade;

//글자 속상
const Title=styled.div`
font-size:15px;
font-weight:bold;
margin-top:15px;
`;

//글자 레이아웃
const TitleLayout = styled.div`
height:60px;
width:60px;
text-align:right;
`;

//인풋 레이아웃
const InputLayout =styled.div`
width:75%;
height:50px;
border-radius: 30px;
background-color:rgb(217,217,217);
display:flex;
margin:0 auto;
padding:6px;
`;

//입력 레이아웃
const StyledInput =styled.input`
outline:none;
border: 0 solid black;
width:30%;
font-size:15px;
background-color:rgb(217,217,217);
margin-left: auto;
text-align:right;
margin-top:5px;
`;

const StockTradeCom =styled.div`

`;

//스타일 레이아웃
const StyledLayout = styled.div`
margin-top:30px;
border-radius: 50px 50px 50px 50px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;
`;

//기업명 기업정보 아이콘 묶는 레이아웃
const Box =styled.div`
padding:10px;
margin:10px;
display:flex;
`;

//버튼 스타일
const StyledBtn = styled.button`
height:45px;
width:200px;
border-radius: 30px;
padding:5px;
text-algin:center;
border:none;
color:white;
font-size:20px;
margin:0 auto;
${(props)=>{
    if(props.className === 'buy' ){
        return `
        background-color:rgb(252,190,190);
        `;
    }
    else{
        return `
        background-color:rgb(190,222,252);
        `;
    }
}};
`;

//기업명 기업정보 아이콘 묶는 레이아웃
const RightLayout =styled.div`
margin-left:auto;
text-algin:right;
`;


