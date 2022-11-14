import { useState } from "react";
import styled from "styled-components";
import StockRightMenu from "../component/stock-view-page/StockRightMenu";
import StockViewPageAge from "../component/stock-view-page/StockViewPageAge";
import StockViewPageCategory from "../component/stock-view-page/StockViewPageCategory";
import StockViewPagePrice from "../component/stock-view-page/StockViewPagePrice";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width:60%;
  padding-top: 160px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  width:80%;
  @media screen and (max-width : 1100px){
    grid-template-columns : repeat(1, 540px);
  }
  @media screen and (min-width : 1100px){
    grid-template-columns : repeat(2, 540px);
  }
  justify-content : center;
  gap: 50px;
  margin-top: 25px;
`;

const Box = styled.div`
  background-color: transparent;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  height: 850px;
  padding: 20px;
`;

const SubNav = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  font-size:20px;
  background-color: rgba(0,0,0,0.2);
  border-radius:15px;
  padding: 5px 5px;
  margin-left: 10px;
  h3{
    font-weight: 600;
  }
`;

const SubNavMenu = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  font-weight: 800;
  opacity : ${props => props.match ? "1" : "0.5"};
`;


function StockViewPage(){
  const [leftMatch, setLeftMatch] = useState("금액");
  const [rightMatch, setRightMatch] = useState("관심");
  const leftMenu = ["금액", "연령", "업종"];
  const rightMenu = ["관심", "등락", "거래"];

  const data = [
    {
      name: "주식2",
      price: 50000,
      rate : 5.0
    },
    {
      name: "아주아주아주아주아주긴이름",
      price: 45000,
      rate : 4.7
    },
    {
      name: "주식5",
      price: 60000,
      rate : 4.0
    },
    {
      name: "주식8",
      price: 50000,
      rate : 2.0
    },
    {
      name: "주식9",
      price: 75000,
      rate : 1.9
    },
    {
      name: "주식2",
      price: 150000,
      rate : 5.0
    },
    {
      name: "주식3",
      price: 545000,
      rate : 4.7
    },
    {
      name: "주식5",
      price: 140000,
      rate : 4.0
    },
    {
      name: "주식8",
      price: 50000,
      rate : 2.0
    },
    {
      name: "주식9",
      price: 35000,
      rate : 1.9
    },
    {
      name: "주식2",
      price: 5000,
      rate : 5.0
    },
    {
      name: "주식3",
      price: 1000,
      rate : 4.7
    },
  ]

  const onLeftMenuClicked = (name)=> {
    if(leftMatch === name)
      return;
    else{
      setLeftMatch(name);
    }
  }

  const onRightMenuClicked = (name)=> {
    if(rightMatch === name)
      return;
    else{
      setRightMatch(name);
    }
  }

  return (
  <MainBox>
    <Container>
      <Box>
        <SubNav>
          {
            leftMenu.map(name => 
              <SubNavMenu
                key = {name}
                match = {leftMatch === name}
                onClick = {() => onLeftMenuClicked(name)}
              >
                {name}
              </SubNavMenu>
              )
          }
        </SubNav>
        {leftMatch === "금액"? <StockViewPagePrice/> : null}
        {leftMatch === "연령"? <StockViewPageAge/> : null}
        {leftMatch === "업종"? <StockViewPageCategory/> : null}
      </Box>
      <Box>
        <SubNav>
          {
            rightMenu.map(name => 
              <SubNavMenu
                key = {name}
                match = {rightMatch === name}
                onClick = {() => onRightMenuClicked(name)}
              >
                {name}
              </SubNavMenu>
              )
          }
        </SubNav>
        <StockRightMenu data = {data}/>
      </Box>
    </Container>
  </MainBox>
  );
}

export default StockViewPage;