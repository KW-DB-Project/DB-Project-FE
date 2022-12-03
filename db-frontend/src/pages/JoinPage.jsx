import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";

function JoinPage(){
  const [inputs, setInputs] = useState({userName:'',id:'',age:'',password:''});
  const {userName,id,age,password} = inputs; // 비구조화 할당을 통해 값 추출
  const navigate = useNavigate();

  const onChange = (e) => {
    const {name, value} =e.target; //우선 e.target에서 id와 value 추출
    setInputs({
      ...inputs, //기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });

  };

  const onClick = () => {
    if(id==='' || password==='' || userName==='' || age==='')
    {
      alert("값을 모두 입력해주세요");
      return;
    }
    else if(!parseInt(age)|| parseInt(age) <= 0)
    {
      alert("나이를 다시 입력해주세요");
      return;
    }
    else{
      console.log(parseInt(age));
      Axios.post("/user/signup", {
        id: id,
        pw :password,
        userName : userName,
        age : age,
      }).then((res)=>{
        if(res.data.isSuccess === true){
          alert("성공");
          navigate('/');
        }else{
          alert("실패");
       }
    }).catch((e) => {
      console.error(e);
    })
    }
  };

  return(
    <JoinPageLayout>
      <Joinlayout>
        <InputContainer>
          <TitleLayout><Title>이름</Title></TitleLayout>
          <InputLayout>
            <StyledInput type="text" onChange={onChange} name="userName" value={userName}></StyledInput>
          </InputLayout>
        </InputContainer>
        <InputContainer>
          <TitleLayout><Title>아이디</Title></TitleLayout>
          <InputLayout>
            <StyledInput type="text" onChange={onChange} name="id" value={id}></StyledInput>
          </InputLayout>
        </InputContainer>
        <InputContainer>
          <TitleLayout><Title>나이</Title></TitleLayout>
          <InputLayout>
            <StyledInput type="text" onChange={onChange} name="age" value={age}></StyledInput>
          </InputLayout>
        </InputContainer>
        <InputContainer>
          <TitleLayout><Title>비밀번호</Title></TitleLayout>
          <InputLayout>
            <StyledInput type="text" onChange={onChange} name="password" value={password}></StyledInput>
          </InputLayout>
        </InputContainer>
        <JoinBtnLayout>
          <JoinBtn onClick={onClick}>회원가입</JoinBtn>
        </JoinBtnLayout>
      </Joinlayout>
    </JoinPageLayout>
  );
}

export default JoinPage;

const JoinPageLayout =styled.div`
  height:100%;
  padding-top: 200px;
  padding-bottom: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//전체 화면 레이아웃
const Joinlayout = styled.div`
  padding-top: 160px;
  margin:0 auto;
  width:600px;
`; //0 auto 중앙정렬 위해서 사용 부모 레이아웃에 flex 걸고 이거 쓰면 중앙정렬

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

//인풋값 컨테이너
const InputContainer = styled.div`
display:flex;
margin-top:10px;
margin-right:50px;
`;

//회원가입 버튼 레이아웃
const JoinBtnLayout =styled.div`
margin-top:20px;
text-align:center;
`;

//회원가입 버튼
const JoinBtn = styled.button`
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

//글자 레이아웃
const TitleLayout = styled.div`
height:60px;
width:60px;
text-align:right;
`;

//글자 속성
const Title=styled.div`
font-size:15px;
font-weight:bold;
margin-top:17px;
`;