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

  const onChange = (e) => {
    setwrSearch(e.target.value);
  };

  const searchStock = (stockname) => {
    axios
    .get('/trade/search?name='+stockname, {
      id:login.id
    })
    .then((res) => {
      console.log(res.data);
      setStockInfo(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const [stockInfo, setStockInfo] = useState({s_name:'1',
                                                cd:'1',
                                                slow:'1',
                                                sopen:'1',
                                                slast:'1',
                                                shigh:'1',
                                                schg:1,
                                                svol:'1',
                                                lastPriceDto:[{day:'1',slast:'1'},{day:'2',slast:'2'},{day:'3',slast:'3'}]});

  const tradeVal =  {cd:stockInfo.cd,price:stockInfo.slast};

  //useEffect(searchStock('삼성전자'),[]);

  const SearchOnClick = () => {
      if(wrSearch===''){
        alert('내용을 입력해주세요.');
        return;
      }
      else{
      alert(wrSearch);
      searchStock(wrSearch);
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
      <ComExplain stockInfo={stockInfo} />
      </Box>
      <Box>
        <DebateBtn />
        <StockTrade stockInfo={tradeVal} />
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