import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const Entry = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height:55px;
  margin-bottom:5px;
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
  width: 30%;
  margin-left: 60px;
`;

const StockRate = styled.div`
  display:flex;
  margin-left: 20px;
  color : ${props => props.positive? props.theme.upColor : props.theme.downColor};
  div{
    display: flex;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
`;

function SoaringStockEntry({entry, index}){
  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName>{`${entry.stkNm}`}</StockName>
    <StockPrice>{`${entry.sLast}원`}</StockPrice>
    <StockRate positive = {entry.sChg >= 0 ? true : false}>
    {entry.sChg >= 0 ? <div><FontAwesomeIcon  icon={faCaretUp} size='1x'/>{`${entry.sChg.toFixed(1)}%`}</div> : <div><FontAwesomeIcon  icon={faCaretDown} size='1x'/>{`${entry.sChg}%`}</div>}
    </StockRate>
  </Entry>
  );
}

export default SoaringStockEntry;