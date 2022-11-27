import styled from "styled-components";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import ComExplain from '../component/stock-trading-page/ComExplain';
import StockTrade from '../component/stock-trading-page/StockTrade';
import DebateBtn from '../component/stock-trading-page/DebateBtn'

import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../atom/loginAtom';
import axios from 'axios';

function StockTradingPage(){

  const login = useRecoilValue(isLoginedAtom);

  const [wrSearch,setwrSearch]=useState('');
  const [sname,setSname]=useState('삼성전자');

  const onChange = (e) => {
    setwrSearch(e.target.value);
  };

  const [stockInfo,setStockInfo] = useState({stkCd:'',slow:0,svol:0,schg:0,shigh:0,slast:0,sopen:0});
  const [lastPrice, setLastPrice] = useState([]);

 const searchStock = (stockname) => {

  axios
  .get(`/trade/search?name=${encodeURIComponent(stockname)}`)
  .then((res) => {

    setStockInfo(res.data.stockPriceDto);
    setLastPrice(res.data.lastPriceDto);

  })
  .catch((err) => {
    console.log(err);
  });

}

 useEffect(searchStock(sname),[]);

 /*useEffect(() =>{
  axios
  .get(`/trade`)
  .then((res) => {

    setStockInfo(res.data.stockPriceDto);
    setLastPrice(res.data.lastPriceDto);

  })
  .catch((err) => {
    console.log(err);
  });

 },[]);*/

  const SearchOnClick = () => {
      if(wrSearch===''){
        alert('내용을 입력해주세요.');
        return;
      }
      else{
      alert(wrSearch);
      searchStock(wrSearch);
      setSname(wrSearch);
      setwrSearch('');
      }
  }

  return (
    <Tradelayout>
      <Container>
      <Box>
      <StyledSearchLayout>
        <StyledInput type="text" value={wrSearch} onChange={onChange} />
        <StyledFontawsome icon={faMagnifyingGlass} onClick={SearchOnClick}/> 
      </StyledSearchLayout>
      <ComExplain name={sname} stockPriceDto={stockInfo} lastPriceDto={lastPrice}/>
      </Box>
      <Box>
        <DebateBtn sname={sname} />
        <StockTrade s_cd={stockInfo.stkCd} s_price={stockInfo.slast}/>
      </Box>
      </Container>
    </Tradelayout>

  );
}

export default StockTradingPage;

//인풋 스타일
const StyledInput = styled.input`
width:80%;
color:black;
font-size:22px;
margin:10px;
border:none;
`;

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
box-shadow: ${(props) => props.theme.defaultShadow};
padding:5px;
display:flex;
justify-content:center;
`;

//아이콘 스타일
const StyledFontawsome = styled(FontAwesomeIcon)`
width:30px;
height:30px;
margin-left:5px;
margin-top:13px;
`;