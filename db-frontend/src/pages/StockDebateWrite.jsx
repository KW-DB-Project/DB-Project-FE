import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import { useRecoilValue } from "recoil";
import { isLoginedAtom } from "../atom/loginAtom";

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
  const login = useRecoilValue(isLoginedAtom);
  const navigate = useNavigate();
  const {stock} = useParams();
  const [inputs, setInputs] = useState({
    id: login.id,
    stockName: stock,
    title: '',
    content: ''
  })
  const {id, stockName, title, content} = inputs;

  console.log(login);

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
      alert("??????, ????????? ????????? ?????????????????? ?????????.");
      console.log(content);
      return;
    }else{
      Axios.post("/community/write", {
        id : id,
        stockName: stockName,
        title : title,
        content: content
      }).then((res)=>{
        console.log(id);
        if(res.data.isSuccess){
          alert("??????")
          navigate(-1);
        }
        else  
          alert("??????")
      }).catch((e)=>{
        console.error(e);
      })
    }
  }

  return(
  <MainBox>
    <Box>
      <MiniBox>
        <Lable>??????</Lable>
        <Category>
          {stock}
        </Category> 
      </MiniBox>
      <MiniBox>
        <Lable>??????</Lable>
        <Title onChange={onChangeInput} 
        placeholder="????????? ??????????????? (?????? 100???)" 
        maxLength={100}
        name = "title"
        value = {title}
        >  
        </Title>
      </MiniBox>
      <MiniBox>
        <Lable>??????</Lable>
        <Content 
        onChange={onChangeInput} 
        placeholder="????????? ??????????????? (?????? 2000???)" 
        maxLength={2000}
        name = "content"
        value = {content}
        ></Content>
      </MiniBox>
      <ButtonList>
        <Button onClick = {onClickCancle}>??????</Button>
        <Button onClick ={onClickCreate}>??????</Button>
      </ButtonList>
    </Box>
  </MainBox>
  );
}

export default StockDebateWrite;