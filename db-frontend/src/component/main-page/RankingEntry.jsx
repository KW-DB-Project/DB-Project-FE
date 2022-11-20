import styled from "styled-components";

const Entry = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height:52px;
  margin-bottom:7px;
  font-size: 20px;
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
`;

const StockName = styled.div`
  width: 40%;
  margin-left : 10px;
`;

const StockPrice = styled.div`
  margin-left: 60px;
`;

function RankingEntry({entry, index}){
  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName>{`${entry.stkNm}`}</StockName>
    <StockPrice>{`${entry.slast}원`}</StockPrice>
  </Entry>
  );
}

export default RankingEntry;