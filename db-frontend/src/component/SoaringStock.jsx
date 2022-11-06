import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChartLine, faClock, faCalendar} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SoaringStockEntry from "./SoaringStockEntry";

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

const Calendar = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 50px;
  height: 75px;
  background-color: rgba(0,0,0,0.2);
  border-radius: 20px;
  font-size: 25px;
`;

const Title = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:20px;
  background-color: rgba(0,0,0,0.2);
  border-radius:15px;
  padding: 0 5px;
  margin-left: 10px;

  h3{
    font-weight: 800;
  }
`;

const Timeline = styled.div`
  font-weight: 600;
  margin-top: 10px;
  font-size:20px;
`;

const SoaringStockList = styled.ul`
  height:230px;
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

function SoaringStock(){
  const[today, setToday] = useState(new Date(Date.now()));
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
      <Header>
        <Container>
          <Wrapper>
            <span><FontAwesomeIcon icon={faChartLine} size='2x'/></span>
            <Title>
              <h3>급등주</h3>
            </Title>
          </Wrapper>
          <Timeline>{`${today.getMonth()+1}/${today.getDate()} ${today.getHours()}:00`}</Timeline>
        </Container>
        <Calendar>
          <span><FontAwesomeIcon icon={faClock} size='1x'/></span>
          <span><FontAwesomeIcon icon={faCalendar} size='1x'/></span>
        </Calendar>
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