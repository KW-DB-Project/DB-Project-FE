import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useRecoilValue, useSetRecoilState} from "recoil";
import { isLoginedAtom } from "../atom/loginAtom";
import Axios from "axios";

function LoginPage(){
  const navigate = useNavigate();
  const login = useRecoilValue(isLoginedAtom);
  const setLoginAtom = useSetRecoilState(isLoginedAtom);
  const [inputs, setInputs] = useState({id:'',password:''});
  const {id, password} = inputs; // 비구조화 할당을 통해 값 추출

  const onChangeLoginInput= (e) => {
    const {name, value} =e.target; //우선 e.target에서 id와 value 추출
    setInputs({
      ...inputs, //기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onClickLoginButton = () => {
    if(id==='' || password==='')
    {
      alert("값을 모두 입력해주세요");
      return;
    }
    else{
      if(!login.isLogined){
        Axios.post("/user/login", {
          id: id,
          pw :password
        }).then((res)=>{
          if(res.data.id !== null){
            alert("성공");
            console.log(res.data);
            setLoginAtom({
              isLogined : true,
              userName : res.data.unm,
              id : res.data.id,
              password: res.data.pw,
              age : res.data.age,
              balance : res.data.balance
            });
            navigate(-1);
         }else{
          alert("실패");
         }
      }).catch((e) => {
        console.error(e);
      })
      }
    }
  };

  return(
    <LoginPageLayout>
  <Loginlayout>
     <TitleInputCon >
        <TitleLayout className="아이디 레이아웃"><Title>아이디</Title></TitleLayout>
        <InputLayout>
          <StyledInput type="text" onChange={onChangeLoginInput} name="id" value={id} ></StyledInput>
        </InputLayout>
      </TitleInputCon>
      <TitleInputCon>
        <TitleLayout><Title>비밀번호</Title></TitleLayout>
        <InputLayout>
          <StyledInput type="password" onChange={onChangeLoginInput} name="password" value={password}></StyledInput>
        </InputLayout>
      </TitleInputCon>
      <JoinBtnLayout>
     <LoginBtn onClick={onClickLoginButton} >로그인</LoginBtn>
     </JoinBtnLayout>
     <JoinBtnLayout>
      <JoinBtn to="/join">회원가입</JoinBtn>
      </JoinBtnLayout>
  </Loginlayout>
  </LoginPageLayout>
  );
}

export default LoginPage;

const LoginPageLayout = styled.div`
height:100%;
width:100%;
display: flex;
padding-top:120px;
padding-bottom:160px;
`;

const TitleLayout = styled.div`
height:60px;
width:60px;
text-align:right;
`;

//전체 화면 레이아웃
const Loginlayout = styled.div`
  padding-top: 300px;
  margin:0 auto;
  width:600px;
`; //0 auto 중앙정렬 위해서 사용 부모 레이아웃에 flex 걸고 이거 쓰면 중앙정렬

//회원가입 버튼
const JoinBtn = styled(NavLink)`
  color:gray;
  font-size:15px;
  font-weight:bold;
`;

//회원가입 버튼 레이아웃
const JoinBtnLayout =styled.div`
margin-top:20px;
text-align:center;
`;

//로그인 버튼
const LoginBtn = styled.button`
  font-size:15px;
  border-radius: 30px;
  background-color:black;
  color:white;
  width:160px;
  height:50px;
  font-weight:bold;
  border:none;
  cursor: pointer;
`;

//인풋 레이아웃
const InputLayout =styled.div`
width:73%;
height:50px;
border-radius: 30px;
background-color:rgb(217,217,217);
display:flex;
margin:0 auto;
`;

//입력 레이아웃
const StyledInput =styled.input`
outline:none;
border: 0 solid black;
width:80%;
font-size:15px;
background-color:rgb(217,217,217);
margin: 0 auto;
`;

//글자 레이아웃
const Title=styled.div`
font-size:15px;
font-weight:bold;
margin-top:17px;
`;

//디스플레이 플렉스
const TitleInputCon=styled.div`
display:flex;
margin-top:10px;
margin-right:50px;
`;