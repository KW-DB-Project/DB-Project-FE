import styled from "styled-components";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import ComExplain from '../component/stock-trading-page/ComExplain';
import StockTrade from '../component/stock-trading-page/StockTrade';
import DebateBtn from '../component/stock-trading-page/DebateBtn'

function StockTradingPage(){

  const [wrSearch,setwrSearch]=useState('')

  const onChange = (e) => {
    setwrSearch(e.target.value);
  };


  const SearchOnClick = () => {
      if(wrSearch===''){
        alert('내용을 입력해주세요.');
        return;
      }
      else{
      alert(wrSearch);
      setwrSearch('');
      }
  }

  return (
    <Tradelayout>
      <Container>
      <Box>
      <StyledSearchLayout>
        <input type="text" value={wrSearch} onChange={onChange} style={{
            width:"80%",
            margin:"10px",
            borderBottom:"0px",
            borderRight:"0px",
            borderTop:"0px",
            borderLeft:"0px",
            padding:"5px",
            color:"black",
            fontSize:"22px",
            marginLeft:"25px",
            marginTop:"13px"
          }}></input>
          <StyledFontawsome icon={faMagnifyingGlass} onClick={SearchOnClick}/> 
      </StyledSearchLayout>
      <ComExplain />
      </Box>
      <Box>
        <DebateBtn />
        <StockTrade />
      </Box>
      </Container>
    </Tradelayout>

  );
}

export default StockTradingPage;

//전체 화면 레이아웃
const Tradelayout = styled.div`
  display:flex;
  flex-direction: column;
  width:60%;
  padding-top: 160px;
  padding-bottom: 160px;
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
 
`;

//검색창
const StyledSearchLayout = styled.div`
height:70px;
border-radius: 30px;
width:500px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:5px;
`;

//아이콘 스타일
const StyledFontawsome = styled(FontAwesomeIcon)`
width:30px;
height:30px;
`;