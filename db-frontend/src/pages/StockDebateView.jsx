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

const DeleteButton = styled(ExitButton)`
  margin-left : 20px;
`;

const LikeButton = styled.button`
  display:flex;
  background-color : white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.defaultShadow};
  border: none;
  span{
    opacity: 1.0;
  }
  cursor: pointer;
  color : ${props => props.isLike? "tomato" : "black"};
`;

const ButtonWrapper = styled.div`
  display:flex;
`;

const ButtonWrapperDelete = styled.div`
  display:flex;
  margin-top : 20px;
  width: 100%;
  justify-content: flex-end;
`;



function StockDebateView(){
  const [data, setData] = useState([]);
  const {idx} = useParams();
  const {stock} = useParams();
  const navigate = useNavigate();
  const login = useRecoilValue(isLoginedAtom);
  const [isLike, setIsLike] = useState(false);
  //useEffect();

  const onClickExit = () =>{
    navigate(`/debate/${stock}`);
  }

  const onClickLike = (e) => {
    const {name} = e.target;
    if(login.isLogined){
      Axios.post("/community/like" , {
        postIdx : idx,
        userId : login.id,
      }).then((res)=> {
        Axios.post("/community/print", {
          stockName: stock,
          userId : login.id
        }).then((res)=>{
          setData(res.data.filter((item) => {
            return (idx === item.board.idx.toString());
          })[0]);
        })
          .catch((e)=>{
            console.error(e);
        })
      }).catch((e)=>{
        console.error(e);
      })
    }else{
      navigate("/login");
    }
  };

  const onClickDelete = () => {
    if(window.confirm("정말로 삭제하시겠습니까?") === true){
      Axios.post("/community/postDelete" , {
        idx : idx
      }).then((res) => {
        navigate(`/debate/${stock}`);      
      }).catch((e) => {
        console.error(e);
      })
    }else{
      return;
    }
  };

  useEffect(() => {
    Axios.post("/community/print", {
      stockName: stock,
      userId : login.id,
    }).then((res)=>{
      setData(res.data.filter((item) => {
        return (idx === item.board.idx.toString());
      })[0]);
    })
      .catch((e)=>{
        console.error(e);
    })
  }, []);

  console.log(data.isLike);

  return(
  <MainBox>
    <ButtonWrapper>
      <ExitButton onClick = {onClickExit}>목록</ExitButton>
    </ButtonWrapper>
    <Box>
      <Header>
        <Title>{`${data?.board?.title}`}</Title>
        <BoardDescription>
          <FirstRow>
            <span>{`${stock} | `}</span>
            <span>{`${data?.board?.createDate?.split('T')[0]} | `}</span>
            <span>{`${data?.board?.userId}`}</span>
          </FirstRow>
          <SecondRow>
            <span>{`좋아요 : ${data?.board?.blike}`}</span>
          </SecondRow>
        </BoardDescription>
      </Header>
      <ContentWrapper> 
        <Content>
          {data?.board?.content}
        </Content>
        <LikeButton isLike = {data?.isLike} onClick={onClickLike} name ="blike">
          <span><FontAwesomeIcon icon={faHeart} size='2x'/></span>
          <span>{data?.board?.blike}</span>
        </LikeButton>
      </ContentWrapper>
    </Box>
    <ButtonWrapperDelete>
      {(login.isLogined && login.id === data?.board?.userId) ? <DeleteButton onClick = {onClickDelete}>삭제</DeleteButton> : null}
    </ButtonWrapperDelete>
  </MainBox>);
}

export default StockDebateView;