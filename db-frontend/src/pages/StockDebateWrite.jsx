import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const MainBox = styled.div`
  width: 980px;
  padding-top:200px;
  padding-bottom:160px;
  margin: 0 auto;
`;
  
const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-left:100px;
`;

const MiniBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Category = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
  font-size: 20px;
`;

const Lable = styled.div`
  margin-right: 100px;
  width: 40px;
  font-weight: 600;
`;

const ButtonList= styled.div`
  display:flex;
  width: 100%;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  color: rgba(0,0,0,0.8);
  align-items: center;
  justify-content: center;
  width:100px;
  height:40px;
  border-radius: 15px;
  margin-left: 20px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
`;

const Title = styled.input`
  width: 740px;
  height: 50px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
  font-size: 20px;
  padding: 0 10px;
`;

const Content = styled.textarea`
  width: 740px;
  height: 600px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
  font-size: 20px;
  word-wrap:break-word;
  align: top;
  padding: 20px 10px;
  resize: none;
`;

function StockDebateWrite(){
  const navigate = useNavigate();
  const {stock} = useParams();
  const [inputs, setInputs] = useState({
    userName: '',
    stockCode: '',
    title: '',
    content: '',
    createDate: '',
    like: 0,
  })
  const {userName, stockCode, title, content, createDate, like} = inputs;
  
  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const onClickCancle = () => {
    navigate(-1);
  }

  const onClickCreate = () => {
    if(content === '' || title === ''){
      alert("내용, 제목은 필수로 입력해주셔야 합니다.");
      console.log(content);
      return;
    }
  }

  return(
  <MainBox>
    <Box>
      <MiniBox>
        <Lable>종목</Lable>
        <Category>
          {stock}
        </Category> 
      </MiniBox>
      <MiniBox>
        <Lable>제목</Lable>
        <Title onChange={onChangeInput} 
        placeholder="제목을 입력하세요 (최대 100자)" 
        maxLength={100}
        name = "title"
        value = {title}
        >  
        </Title>
      </MiniBox>
      <MiniBox>
        <Lable>내용</Lable>
        <Content 
        onChange={onChangeInput} 
        placeholder="내용을 입력하세요 (최대 2000자)" 
        maxLength={2000}
        name = "content"
        value = {content}
        ></Content>
      </MiniBox>
      <ButtonList>
        <Button onClick = {onClickCancle}>취소</Button>
        <Button onClick ={onClickCreate}>작성</Button>
      </ButtonList>
    </Box>
  </MainBox>
  );
}

export default StockDebateWrite;