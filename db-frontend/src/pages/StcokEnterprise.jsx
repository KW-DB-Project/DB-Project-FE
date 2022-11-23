import {useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
  
`;

const MiniBox = styled.div`
  display:flex;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding-bottom: 20px;
  margin-bottom: 10px;
 `;
  
const Summary = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  font-weight: 600;
  border-right: 1px solid rgba(0,0,0,0.2);
  h5{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  padding: 10px;
`;

const Holder = styled(Summary)`
  border: none;
  h6{
    font-weight: 600;
  }
`;

const LS = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 20px;
  font-weight: 600;
`;

const BoardLink = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  width: 80px;
  height: 25px;
  color: white;
  background-color: black;
  margin-top: px;
`;

const HolderList = styled.div``;

const Header = styled.div`
  display:grid;
  width: 100%;
  grid-template-columns : 1fr 1fr 1fr;
  justify-items: center;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 2px solid black;
`;

const Entry = styled(Header)`
  border-bottom: 1px solid rgba(0,0,0,0.2);
`;

function StockEnterprise({data}){
  const {code} = useParams();
  const navigate = useNavigate();

  const onClickLink = () => {
    navigate(`/debate/${data.enterpriseAndStockQuoteDto.entNm}`);
  };

  return(<>
  {code === data.enterpriseAndStockQuoteDto.stockStkCd ? 
    <Box>
      <BoardLink onClick = {onClickLink}>종목토론</BoardLink>
      <MiniBox>
        <Summary>
          <h5>기업개요</h5>
          {data.enterpriseAndStockQuoteDto.entSmry}
        </Summary>
        <Holder>
          <h5>주요주주</h5>
          <HolderList>
            <Header>
              <span>주주</span>
              <span>보유주식수</span>
              <span>보유지분</span>
            </Header>
            {
            data.mainStockHolders.map((item) => {
              return(
                <Entry>
                <span>{item.mstockholder}</span>
                <span>{item.stockNum}</span>
                <span>{item.stake}</span>
                </Entry>
              )
            })
            }
          </HolderList>
        </Holder>
      </MiniBox>
      <MiniBox>
        <Summary>
          <h5>상장주식수</h5>
          <LS>{data.enterpriseAndStockQuoteDto.ls}</LS>
        </Summary>
        <Holder>
          <h5>업종</h5>
          <LS>{data.enterpriseAndStockQuoteDto.category}</LS>          
        </Holder>
      </MiniBox>
    </Box> 
    : null}
  </>
  );
}

export default StockEnterprise;