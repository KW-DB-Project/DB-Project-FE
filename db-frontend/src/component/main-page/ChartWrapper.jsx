import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSquarePollVertical} from "@fortawesome/free-solid-svg-icons";
import KOSPIChart from "./KOSPIChart";

const Container = styled.div`
  span{
    color: rgba(0,0,0,0.3);
  }
  display: flex;
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
    font-weight: 600;
  }
`;

function ChartWrapper(){
  return (
    <>
      <Container>
        <span><FontAwesomeIcon icon={faSquarePollVertical} size='2x'/></span>
        <Title>
          <h3>코스피 지수 KOSPI</h3>
        </Title>
      </Container>
      <KOSPIChart/>
    </>
  );
}

export default ChartWrapper;