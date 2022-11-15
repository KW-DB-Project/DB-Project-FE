import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

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
  margin-left : 10px;
`;

const StockPrice = styled.div`
  margin-left: 60px;
`;

const StockRate = styled.div`
  display:flex;
  margin-left: 20px;
  color : ${props => props.theme.upColor};
  div{
    font-size: 20px;
    margin-right: 10px;
    padding-top:1px;
  }
`;

function SoaringStockEntry({entry, index}){
  return(
  <Entry>
    <RankNumber>{`${index+1}`}</RankNumber>
    <StockName>{`${entry.name}`}</StockName>
    <StockPrice>{`${entry.price}원`}</StockPrice>
    <StockRate>
      <div><FontAwesomeIcon icon={faCaretUp} size='1x'/></div>
      {`${entry.rate}%`}
    </StockRate>
  </Entry>
  );
}

export default SoaringStockEntry;