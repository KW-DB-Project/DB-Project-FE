import styled from "styled-components";
import StockPriceEntry from "./StockPriceEntry";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 10px;
`;

const RankList = styled.ul`
  width: 100%;
  height:85%;
  overflow: scroll;
  overflow-x:hidden;
  padding-right: 10px;
  margin-top: 65px;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

function StockRightMenu({data}){
  return(
  <Container>
    <RankList>
      {
        data.map((entry, index) => {
          return (
            <StockPriceEntry
              key = {index}
              entry = {entry}
              index = {index}
            />
          )
        })
      }
    </RankList>
  </Container>
  );
}

export default StockRightMenu;