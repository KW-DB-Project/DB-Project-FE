import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";
import RankingEntry from "./RankingEntry";
import { useEffect, useState } from "react";
import Axios from "axios";

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
  padding: 8px 8px;
  margin-left: 10px;

  h3{
    font-weight: 600;
  }
`;

const TradingRankList = styled.ul`
  height:90%;
  padding-right: 10px;
  margin-top: 10px;
`;

function TradingRanking(){
  const [data, setData] = useState([]);

  useEffect(()=>{
    Axios.get("/main/volume")
      .then((res)=>{
        setData(res.data);
      }).catch((e)=>{
        console.error(e);
      })
  },[]);

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