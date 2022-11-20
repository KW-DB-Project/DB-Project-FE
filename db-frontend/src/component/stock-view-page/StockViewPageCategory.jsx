import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
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

const Left = styled.span`
`;

const Right = styled.span`
`;

function StockViewPageCategory(){
  const [match, setMatch] = useState("건설업");
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(true);
  const [pageNum, setPageNum] = useState(0);
  const menu = ["건설업", "농업", "제조업", "운송업", "금융업", "서비스업"];
  const [data, setData] = useState([]);

  useEffect(()=>{
    Axios.get("/stcok/sector")
      .then((res)=>{
        setData(res.data);
      }).catch((e)=>{
        console.error(e);
      })
  },[]);

  const onMenuClicked = (target)=> {
    if(match === target)
      return;
    else{
      setMatch(target);
    }
  }

  const onClickLeft = () => {
    if(pageNum - 4 >= 0){
      setPageNum(pageNum - 4);
      setMatch(menu[pageNum-4]);
    }
    else{    
      setPageNum(0);
    }
  }

  useEffect(() => {
    if(pageNum === 0)
      setLeftActive(false);
    else if (pageNum + 4 >= menu.length)
      setRightActive(false);
    else {
      setLeftActive(true);
      setRightActive(true);
    }
  }, [pageNum, menu.length]);


  const onClickRight = () => {
    if(pageNum + 4 < menu.length){
      setPageNum(pageNum + 4);
      setMatch(menu[pageNum+4]);
    }
    else
      return;
  }

  return(
  <Container> 
    <SubNav>
      <Left active = {leftActive}><FontAwesomeIcon icon={faCaretLeft} size='1x' cursor={'pointer'} onClick={() => onClickLeft()}/></Left>
          {
            menu.slice(pageNum, pageNum+4).map((item) => 
              <SubNavMenu
                key = {item}
                match = {match === item}
                onClick = {() => onMenuClicked(item)}
              >
                {item}
              </SubNavMenu>
              )
          }
      <Right active = {rightActive}><FontAwesomeIcon icon={faCaretRight} size='1x' cursor={'pointer'} onClick={() => onClickRight()}/></Right>
    </SubNav>
    <RankList>
      {
       data.filter(entry => ( (entry.category === match))).map((entry, index) =>{
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

export default StockViewPageCategory;