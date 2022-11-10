import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import RankingEntry from "./RankingEntry";

const Container = styled.div`
  span{
    color: rgba(0,0,0,0.3);
    font-size: 10px;
  }
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  border-radius:15px;
  padding: 5px 5px;
  margin-left: 10px;

  h3{
    font-weight: 600;
  }
`;

const TradingRankList = styled.ul`
  height:90%;
  overflow: scroll;
  overflow-x:hidden;
  padding-right: 10px;
  margin-top: 10px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

function TradingRanking(){
  const data = [
    {
      name: "주식2",
      price: 50000,
      rate : 5.0
    },
    {
      name: "주식3",
      price: 45000,
      rate : 4.7
    },
    {
      name: "주식5",
      price: 40000,
      rate : 4.0
    },
    {
      name: "주식8",
      price: 50000,
      rate : 2.0
    },
    {
      name: "주식9",
      price: 35000,
      rate : 1.9
    },
    ];

  return(
    <>
      <Container>
        <span><FontAwesomeIcon icon={faSackDollar} size='2x'/></span>
        <Title>
          <h3>거래 순위</h3>
        </Title>
      </Container>
      <TradingRankList>
        {
          data.map((entry, index) =>
            <RankingEntry
              key = {index}
              entry = {entry}
              index = {index}
            />
          )
        }
      </TradingRankList>
    </>
  );
}

export default TradingRanking;