import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const Entry = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height:55px;
  margin-bottom:5px;
  font-size: 20px;
  font-weight: 800;
  padding-right: 20px;
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
  width: 240px;
  margin-left : 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StockPrice = styled.div`
  width: 170px;
`;

const StockRate = styled.div`
  display:flex;
  margin-right: 20px;
  color : ${props => props.positive? props.theme.upColor : props.theme.downColor};
  div{
    display: flex;
    width: 50px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  span{
    margin-left: ${props => props.positive? '15px' : '10px'};
  }
`;

function SoaringStockEntry({entry, index}){
  const transNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName>{`${entry.stkNm}`}</StockName>
    <StockPrice>{`${transNumber(entry.slast)}원`}</StockPrice>
    <StockRate positive = {entry.schg >= 0 ? true : false}>
    {entry.schg >= 0 ? <div><FontAwesomeIcon  icon={faCaretUp} size='1x'/><span>{`${entry.schg.toFixed(4)}%`}</span></div> 
    : <div><FontAwesomeIcon  icon={faCaretDown} size='1x'/><span>{`${entry.schg.toFixed(4)}%`}</span></div>}
    </StockRate>
  </Entry>
  );
}

export default SoaringStockEntry;