import { useEffect, useState } from "react";
import { Link, Route, Routes,useParams} from "react-router-dom";
import styled from "styled-components";
import StockEnterprise from "./StcokEnterprise";
import Axios from "axios";

const MainBox = styled.div`
  width: 1080px;
  padding-top: 150px;
  padding-bottom: 160px;
  margin: 0 auto;
`;

const Box = styled.div`
  background-color: transparent;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  padding: 40px;
`;

const Name = styled(Link)`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Last = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const Open = styled.div`
  display:flex;
  justify-content: flex-end;
`;
const High = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const Low = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const Change = styled.div`
  display:flex;
  justify-content: center;
`;

const Volume = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const Price = styled.div`
  display:flex;
  justify-content: flex-end;
`;
const Header = styled.div`
  display : grid;
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  border-bottom: 3px solid black;
  width: 100%;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr 2fr;
  gap: 20px;
  ${Name}{
    justify-self: start;
  }
  ${Last}{
    justify-self: end;
  }
  ${Open}{
    jusitfy-self: end;
  }
  ${High}{
    jusitfy-self: end;
  }
  ${Low}{
    jusitfy-self: end;
  }
  ${Change}{
    jusitfy-self: start;
    margin-left:20px;
  }
  ${Volume}{
    jusitfy-self: end;
  }
`;

const List = styled(Header)`
  border-bottom: ${props => !props.clicked ? "1px solid rgba(0,0,0,0.2)" : "none"};
  ${Name}{
    h5{
      font-size:25px;
      margin-bottom:5px;
    }
    span{
      margin-left: 2px;
      opacity: 0.5;
    }
  }
  ${Price}{
    font-size: 20px;
    font-weight: 500;
  }
  ${Volume}{
    font-size: 20px;
    font-weight: 500;
  }
  ${Change}{
    width: 70px;
    font-size: 17px;
    color: white;
    padding: 8px;
    background-color: ${props => props.isPositive ? props.theme.upColor : props.theme.downColor};
    border-radius: 5px;
  }
  align-items: center;
  margin-bottom: 5px;
`;

const Entry = styled.div`
  padding-bottom: 20px;
`;


function StockEnterpriseList(){
  const {code} = useParams();
  const [data, setData] = useState([]);
  const numberTransform = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(()=>{
    Axios.get("/enterpriseInfo")
      .then((res)=>{
        setData(res.data);
      }).catch((e) => {
        console.error(e);
      })
  }, []);

  return(
  <MainBox>
    <Box>
      <Header>
        <Name as = "div">기업명</Name>
        <Last>종가</Last>
        <Open>시가</Open>
        <High>고가</High>
        <Low>저가</Low>
        <Change>등락률</Change>
        <Volume>거래량</Volume>
      </Header>
      {data.map((entry) => {
        return (
          <Entry key = {entry.enterpriseAndStockQuoteDto.stockStkCd} clicked = {code === entry.enterpriseAndStockQuoteDto.stockStkCd}>
            <List isPositive = {entry.enterpriseAndStockQuoteDto.schg >= 0 ? true: false} clicked = {code === entry.enterpriseAndStockQuoteDto.stockStkCd}>
              <Name to = {code===entry.enterpriseAndStockQuoteDto.stockStkCd ? `/enterprise` : `/enterprise/${entry.enterpriseAndStockQuoteDto.stockStkCd}`}>
                <h5>{entry.enterpriseAndStockQuoteDto.entNm}</h5>
                <span>{entry.enterpriseAndStockQuoteDto.stockStkCd}</span>
              </Name>
              <Price>{numberTransform(entry.enterpriseAndStockQuoteDto.slast)}</Price>
              <Price>{numberTransform(entry.enterpriseAndStockQuoteDto.sopen)}</Price>
              <Price>{numberTransform(entry.enterpriseAndStockQuoteDto.shigh)}</Price>
              <Price>{numberTransform(entry.enterpriseAndStockQuoteDto.slow)}</Price>
              <Change>{`${entry.enterpriseAndStockQuoteDto.schg.toFixed(3)}%`}</Change>
              <Volume>{numberTransform(entry.enterpriseAndStockQuoteDto.svol)}</Volume>
           </List> 
        <Routes>
          <Route path = ":code" element={<StockEnterprise data = {entry}/>}></Route>
        </Routes>
      </Entry>
        );
      })}
    </Box>
  </MainBox>);
}

export default StockEnterpriseList;