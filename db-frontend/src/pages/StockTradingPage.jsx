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

  const [stockInfo,setStockInfo] = useState({stkCd:'',slow:'',svol:'',schg:'',shigh:'',slast:'',sopen:''});
  const [lastPrice, setLastPrice] = useState([{}]);

 // const tradeVal =  {cd:stockInfo.stockPriceDto.stkCd,price:stockInfo.stockPriceDto.slast};

  useEffect(() =>{  

    axios
    .get(`/trade/search?name=${encodeURIComponent('삼성전자')}`, {
      id:login.id
    })
    .then((res) => {
      console.log(res.data);
  
     setStockInfo({
      stkCd:res.data.stockPriceDto.stkCd,
      slow:res.data.stockPriceDto.slow,
      svol:res.data.stockPriceDto.svol,
      schg:res.data.stockPriceDto.schg,
      shigh:res.data.stockPriceDto.shigh,
      slast:res.data.stockPriceDto.slast,
      sopen:res.data.stockPriceDto.sopen
    });
    
    setLastPrice(res.data.lastPriceDto); 

    })
    .catch((err) => {
      console.log(err);
    });},[]);

  const searchStock = (stockname) => {

    axios
    .get(`/trade/search?name=${encodeURIComponent('삼성전자')}`, {
      id:login.id
    })
    .then((res) => {
      console.log(res.data);
  
      setStockInfo({
       stkCd:res.data.stockPriceDto.stkCd,
       slow:res.data.stockPriceDto.slow,
       svol:res.data.stockPriceDto.svol,
       schg:res.data.stockPriceDto.schg,
       shigh:res.data.stockPriceDto.shigh,
       slast:res.data.stockPriceDto.slast,
       sopen:res.data.stockPriceDto.sopen
     });
     
     setLastPrice(res.data.lastPriceDto); 
    })
    .catch((err) => {
      console.log(err);
    });
  }

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
        <DebateBtn />
        <StockTrade />
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