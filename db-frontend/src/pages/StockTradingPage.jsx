import styled from "styled-components";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


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

  const BuyClick = () => {
      alert('매수 클릭');
   
  }

  const SellClick = () => {
    alert('매도 클릭');
 
}

  return (
    <Tradelayout>
      <LeftSide>
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
      <StyledLayout>
        <NameLayout>
        <StyledFontawsome icon={faHeart} /><ComName>기업명</ComName><ComEx>기업정보</ComEx>
        </NameLayout>
      </StyledLayout>
      </LeftSide>
      <RightSide>
      <StyledLayout>
        <NameLayout>
          <DisplayFlex>
        <StyledBtn style={{backgroundColor:'rgb(252,190,190)'}} onClick={BuyClick} >매수</StyledBtn>
        <StyledBtn style={{backgroundColor:'rgb(190,222,252)',marginLeft:'40px'}} onClick={SellClick}>매도</StyledBtn>
        </DisplayFlex>
        </NameLayout>
      </StyledLayout>
      </RightSide>
    </Tradelayout>

  );
}

export default StockTradingPage;

//기업 정보
const ComEx = styled.div`
font-size:15px;
postion:absolute;
right:10px;
`;

//기업 이름
const ComName = styled.div`
  font-size:25px;
  margin-left:10px;
  margin-top:5px;
`;

//전체 화면 레이아웃
const Tradelayout = styled.div`
  display:flex;
  width:60%;
  padding-top: 160px;
  margin: 0 auto;
`;

//디스플레이 플렉스
const DisplayFlex=styled.div`
display:flex;
`;

//검색창
const StyledSearchLayout = styled.div`
height:70px;
border-radius: 30px;
width:500px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:5px;
`;

//왼쪽 설정
const LeftSide =styled.div`

`;

//오른쪽 설정
const RightSide =styled.div`
margin-left:40px;
margin-top:70px;
`;

//스타일 레이아웃
const StyledLayout = styled.div`
margin-top:30px;
border-radius: 50px 50px 50px 50px;
width:500px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:5px;
`;

//기업명 기업정보 아이콘 묶는 레이아웃
const NameLayout =styled.div`
display:flex;
padding:10px;
margin:10px;
position:relative;
`;

//아이콘 스타일
const StyledFontawsome = styled(FontAwesomeIcon)`

width:30px;
height:30px;

`;

//버튼 스타일
const StyledBtn = styled.button`
height:45px;
width:200px;
border-radius: 30px;
padding:5px;
text-algin:center;
border:none;
color:white;
font-size:20px;
`;