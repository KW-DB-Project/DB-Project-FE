import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const Entry = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height:60px;
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
`;

const StockPrice = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 40%;
  margin-right:5px;
  padding-right: 10px;
`;

const StockRate = styled.div`
  display:flex;
  justify-content: flex-start;
  width: 18%;
  color : ${props => props.isPositive?props.theme.upColor : props.theme.downColor};
  div{
    font-size: 20px;
    margin-right: 10px;
    padding-top:1px;
  }
`;

function StockPriceEntry({entry, index}){
  const number = entry.slast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const data = entry.schg? entry.schg : entry.svol;

  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName>{`${entry.stkNm}`}</StockName>
    <StockPrice>{`${number}원`}</StockPrice>
    <StockRate isPositive = {data >= 0 ? true : false}>
      <div><FontAwesomeIcon icon={data >= 0 ? faCaretUp : faCaretDown} size='1x'/></div>
      {`${entry.schg?entry.schg.toFixed(3):entry.svol}%`}
    </StockRate>
  </Entry>
  );
}

export default StockPriceEntry;