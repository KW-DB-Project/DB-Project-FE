import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
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

const InterestRanking = styled.ul`
  height:90%;
  padding-right: 10px;
  margin-top: 10px;
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

function InterestStock(){
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("/main/interest")
      .then((res) => {
        setData(res.data);
      }).catch((e)=>{
        console.error(e);
      })
  }, []);

  return(
    <>
      <Container>
        <span><FontAwesomeIcon icon={faHeart} size='2x'/></span>
        <Title>
          <h3>관심 순위</h3>
        </Title>
      </Container>
      <InterestRanking>
        {
          data.map((entry, index) =>
            <RankingEntry 
              key = {index}
              entry = {entry}
              index = {index}
            />
            )
        }
      </InterestRanking>
    </>
  );
}

export default InterestStock;