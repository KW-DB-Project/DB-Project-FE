import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChartLine, faClock, faCalendar} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SoaringStockEntry from "./SoaringStockEntry";
import Axios from "axios";

const Header = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: -5px;
`;

const Container = styled.div`
  width: 100%;
  span{
    color: rgba(0,0,0,0.5);
  }
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display:flex;
`;

const Title = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  background-color: rgba(0,0,0,0.2);
  border-radius:15px;
  padding: 0px 5px;
  margin-left: 10px;

  h3{
    font-weight: 800;
  }
`;

const Timeline = styled.div`
  font-weight: 600;
  margin-top: 15px;
  font-size:20px;
`;

const SoaringStockList = styled.ul`
  height:230px;
  padding-right: 10px;
  margin-top: 10px;
`;

function SoaringStock(){
  const[today] = useState(new Date(Date.now()));
  const [data, setData] = useState([]);

  useEffect(()=>{
    Axios.get("/main/soaring")
      .then((res) => {
        setData(res.data);
      }).catch((e) => {
        console.error(e);
      })
  }, []);

  return(
    <>
      <Header>
        <Container>
          <Wrapper>
            <span><FontAwesomeIcon icon={faChartLine} size='2x'/></span>
            <Title>
              <h3>급등주</h3>
            </Title>
          </Wrapper>
          <Timeline>{`10/28`}</Timeline>
        </Container>
      </Header>
      <SoaringStockList>
        {
          data.map((entry, index) =>
            <SoaringStockEntry 
              key = {index}
              entry = {entry}
              index = {index}
            />
            )
        }
      </SoaringStockList>
    </>
  );
}

export default SoaringStock;