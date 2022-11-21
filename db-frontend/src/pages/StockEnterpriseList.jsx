import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import StockEnterprise from "./StcokEnterprise";

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
  border-bottom: 1px solid rgba(0,0,0,0.2);
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
    font-size: 17px;
    color: white;
    padding: 8px;
    background-color: ${(props) => props.isPositive ? props.theme.upColor : props.theme.downColor};
    border-radius: 5px;
  }
  align-items: center;
`;


function StockEnterpriseList(){
  const numberTransform = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return(
  <MainBox>
    <Box>
      <Routes>
       <Route path = ":code" element={<StockEnterprise/>}></Route>
      </Routes>
      <Header>
        <Name as = "div">기업명</Name>
        <Last>종가</Last>
        <Open>시가</Open>
        <High>고가</High>
        <Low>저가</Low>
        <Change>등락률</Change>
        <Volume>거래량</Volume>
      </Header>
      <List>
          <Name to = {`/enterprise/삼성전자`}>
            <h5>삼성전자</h5>
            <span>005930</span>
          </Name>
          <Price>{numberTransform(60900)}</Price>
          <Price>60,900</Price>
          <Price>60,900</Price>
          <Price>60,900</Price>
          <Change isPositive = {true}>{`${-1.46}%`}</Change>
          <Volume>{numberTransform(6796468)}</Volume>
      </List>
    </Box>
  </MainBox>);
}

export default StockEnterpriseList;