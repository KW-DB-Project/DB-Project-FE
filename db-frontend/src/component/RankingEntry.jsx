import styled from "styled-components";

const Entry = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height:50px;
  margin-bottom:7px;
  font-size: 15px;
  font-weight: 800;
`;

const RankNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:20px;
  height:20px;
  background-color: rgba(0,0,0,0.2);
  padding-bottom: 2px;
`;

const StockName = styled.div`
  margin-left : 10px;
`;

const StockPrice = styled.div`
  margin-left: 60px;
`;

function RankingEntry({entry, index}){
  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName>{`${entry.name}`}</StockName>
    <StockPrice>{`${entry.price}원`}</StockPrice>
  </Entry>
  );
}

export default RankingEntry;