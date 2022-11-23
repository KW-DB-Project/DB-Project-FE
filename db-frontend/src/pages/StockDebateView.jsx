import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  display:flex;
  flex-direction: column;
  align-items:center;
  padding: 40px 0;
  border-radius: 15px;
  width: 100%;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
`;

const Header = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const BoardDescription = styled.div`
  display:flex;
  width: 100%;
  justify-content : space-between;
  font-size: 20px;
  opacity: 0.7;
`;

const FirstRow = styled.div`

`;

const SecondRow = styled.div`
`;

const ContentWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:95%;
  height:600px;
`;

const Content = styled.p`
  display:flex;
  justify-content: flex-start;
  font-size: 20px;
  padding: 40px 0px;
`;

const ExitButton = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const LikeButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
  span{
    opacity: 0.5;
  }
  cursor: pointer;
`;

function StockDebateView(){
  const [data, setData] = useState([]);
  const {idx} = useParams();
  const {stock} = useParams();
  const navigate = useNavigate();
  const login = useRecoilValue(isLoginedAtom);
  //useEffect();

  const onClickExit = () =>{
    navigate(`/debate/${stock}`);
  }

  const onClickLike = (e) => {
    const {name} = e.target;
    if(login.isLogined){
      Axios.post("/community/like" , {
        idx : idx
      }).then((res)=> {
        setData({
          ...data,
          [name] : res.data.likeCount
        });
      }).catch((e)=>{
        console.error(e);
      })
    }else{
      navigate("/login");
    }
  };

  useEffect(() => {
    Axios.post("/community/print", {
      stockName: stock
    }).then((res)=>{
      setData(res.data.filter((item) => {
        return (idx === item.idx.toString());
      })[0]);
    }).catch((e)=>{
      console.error(e);
    })
  }, []);

  return(
  <MainBox>
    <ExitButton onClick = {onClickExit}>목록</ExitButton>
    <Box>
      <Header>
        <Title>{`${data?.title}`}</Title>
        <BoardDescription>
          <FirstRow>
            <span>{`${stock} | `}</span>
            <span>{`${data?.createDate.split('T')[0]} | `}</span>
            <span>{`${data?.userId}`}</span>
          </FirstRow>
          <SecondRow>
            <span>{`좋아요 : ${data?.blike}`}</span>
          </SecondRow>
        </BoardDescription>
      </Header>
      <ContentWrapper> 
        <Content>
          {data?.content}
        </Content>
        <LikeButton onClick={onClickLike} name ="blike">
          <span><FontAwesomeIcon icon={faHeart} size='2x'/></span>
        </LikeButton>
      </ContentWrapper>
    </Box>
  </MainBox>);
}

export default StockDebateView;