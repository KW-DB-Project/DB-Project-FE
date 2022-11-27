import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRankingStar, faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import SoaringStockEntry from "./SoaringStockEntry";
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

const Wrapper = styled.div`
  margin-top: 20px;
  height:80%;
`;

const UpDownRankingList = styled.ul`
  height:100%;
  width: 80%;
  padding-right: 10px;
  margin-top: 10px;
`;

const UpDownBox = styled.div`
  display: flex;
  align-items: center;
  height:50%;
`;

const UpMark = styled.div`
  display: flex;
  width: 40px;
  height:40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.upColor};
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0.5;
  margin-right: 30px;
`;

const DownMark =styled.div`
  display: flex;
  width: 40px;
  height:40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.downColor};
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0.5;
  margin-right: 30px;
`;

function UpDownRanking(){
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    Axios.get("main/fluctuation")
      .then((res) => {
        setData(res.data);
      }).catch((e)=>{
        console.error(e);
      })
  }, []);

  return(
    <>
      <Container>
        <span><FontAwesomeIcon icon={faRankingStar} size='2x'/></span>
        <Title>
          <h3>등락 순위</h3>
        </Title>
      </Container>
      <Wrapper>
        <UpDownBox>
          <UpMark>
            <span><FontAwesomeIcon icon={faArrowUp} size='2x'/></span>
          </UpMark>
          <UpDownRankingList>
          {
            data.slice(0,2).map((entry, index) =>
              <SoaringStockEntry 
                key = {index}
                entry = {entry}
                index = {index}
              />
              )
          }
          </UpDownRankingList>
        </UpDownBox>
        <hr/>
        <UpDownBox>
          <DownMark>
            <span><FontAwesomeIcon icon={faArrowDown} size='2x'/></span>
          </DownMark>
          <UpDownRankingList>
            {
              data.slice(2,4).map((entry, index) =>
                <SoaringStockEntry 
                  key = {index}
                  entry = {entry}
                  index = {index}
                />
                )
            }
          </UpDownRankingList>
        </UpDownBox>
      </Wrapper>
    </>
  );
}

export default UpDownRanking;