import { useEffect, useState } from "react";
import styled from "styled-components";
import StockPriceEntry from "./StockPriceEntry";
import StockPriceLeftEntry from "./StockPriceLeftEntry";
import Axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const SubNav = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
font-size:20px;
background-color: #dfe6e9;
border-radius:15px;
padding: 5px 5px;
margin-top : 15px;
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

const RankList = styled.ul`
  width: 100%;
  height:90%;
  overflow: scroll;
  overflow-x:hidden;
  padding-right: 10px;
  margin-top: 10px;

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

function StockViewPageAge(){
  const [match, setMatch] = useState("20대");
  const menu = ["20대", "30대" , "40대", "50대"];
  const [data, setData] = useState([]);

  useEffect(()=> {
    Axios.get("/stock/age")
      .then((res)=>{
        console.log(res.data);
        setData(res.data);
      }).catch((e)=>{
        console.error(e);
      })
  }, []);

  const onMenuClicked = (target)=> {
    if(match === target)
      return;
    else{
      setMatch(target);
    }
  }

  return(
  <Container> 
    <SubNav>
          {
            menu.map((item) => 
              <SubNavMenu
                key = {item}
                match = {match === item}
                onClick = {() => onMenuClicked(item)}
              >
                {item}
              </SubNavMenu>
              )
          }
    </SubNav>
    <RankList>
      {
       data.filter(entry => ( (entry.ageGroup === match))).map((entry, index) =>{
        return (
          <StockPriceLeftEntry
            key = {index}
            entry = {entry}
            index = {index}
          />
        )
       }
       )
      }
    </RankList>
  </Container>
  );
}

export default StockViewPageAge;