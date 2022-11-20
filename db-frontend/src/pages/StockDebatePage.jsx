import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  width: 100%;
  `;
  
const Header = styled.div`
  display:flex;
  width: 1080px;
  justify-content: space-between;
  h2{
    font-size:30px;
  }
`;

const WriteButton= styled(Link)`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 100px;
  height: 40px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.defaultShadow};
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

const BoardEntry = styled.div`
  display:flex;
  align-items: center;
  margin-top: 30px;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  width: 1080px;
  height: 100px;
  padding: 0 40px;
`;

const Index = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: rgba(0,0,0,0.2);
  width: 30px;
  height:30px;
  margin-right: 40px;
`;

const Name = styled.div`
  margin-right: 80px;
`;

const Like = styled.div`
  display:flex;
  margin-right: 50px;
  span{
    opacity: 0.5;
    font-size: 10px;
    margin-right: 5px;
    z-index : -1;
  }
`;

const Title = styled(Link)`
  width: 600px;
`;
const Cdate = styled.div``;

function StockDebatePage(){
  const [boards, setBoards] = useState([]);
  const [stocks, setStocks] = useState();
  const {stock} = useParams();

  console.log(stock);

  useEffect(() => {
    Axios.post("/community/print", {
      stockName : stock
    })
    .then((res) => {
      setBoards(res.data);
    })
    .catch((e) => {
      console.error(e);
    })
  },[]);

  console.log(stocks);
  return(<Box>
    <Board>
    <Header>
      <h2>{`${stock} 토론방`}</h2>
      <WriteButton to = {`/debate/${stock}/write`}>글쓰기</WriteButton>
    </Header>
    {
      boards.map((item) => {
        return (<BoardEntry key = {item.idx}>
          <Index>{item.idx}</Index>
          <Title to = {`/debate/${stock}/${item.idx}`}>{item.title}</Title>
          <Like><span><FontAwesomeIcon icon={faHeart} size='2x'/></span>{item.blike}</Like>
          <Name>{item.userId}</Name>
          <Cdate>{item.createDate.split('T')[0]}</Cdate>
          </BoardEntry>);
      })
    }
    </Board>
  </Box>);
}

export default StockDebatePage;