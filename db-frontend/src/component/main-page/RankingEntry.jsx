import styled from "styled-components";

const Entry = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height:52px;
  margin-bottom:7px;
  font-size: ${(props) => props.length > 7 ? "20px" : "20px"};
  font-weight: 800;
`;

const RankNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:30px;
  height:30px;
  background-color: rgba(0,0,0,0.2);
  padding-bottom: 2px;
  margin-right: 20px;
  border-radius: 5px;
`;

const StockName = styled.div`
  width: 40%;
  margin-left : 0px;
`;

const StockPrice = styled.div`
  margin-left: 50px;
`;

function RankingEntry({entry, index}){
  const transNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName length = {entry.stkNm.length}>{`${entry.stkNm}`}</StockName>
    <StockPrice>{`${transNumber(entry.slast)}원`}</StockPrice>
  </Entry>
  );
}

export default RankingEntry;