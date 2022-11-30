import { useEffect, useState } from "react";
import styled from "styled-components"
import ChartWrapper from "../component/main-page/ChartWrapper";
import InterestStock from "../component/main-page/InterestStock";
import SoaringStock from "../component/main-page/SoaringStock";
import TradingRanking from "../component/main-page/TradingRanking";
import UpDownRanking from "../component/main-page/UpDownRanking";

const MainBox = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  width:1500px;
  padding-top: 160px;
  padding-bottom: 160px;
  margin: 0 auto;
  @media screen and (max-width : 1600px){
    width: 600px;
  }
`;

const FirstContainer = styled.div`
  display: grid;
  width:100%;
  @media screen and (max-width : 1600px){
    grid-template-columns : repeat(1, 550px);
  }
  @media screen and (min-width : 1600px){
    grid-template-columns : repeat(2, 720px);
  }
  justify-content : center;
  gap: 20px;
  margin-top: 25px;
`;

const SecondContainer = styled.div`
  display: grid;
  width:100%;
  @media screen and (max-width : 1600px){
    grid-template-columns : repeat(1, 550px);
  }
  @media screen and (min-width : 1600px){
    grid-template-columns : 410px 600px 410px;
  }
  justify-content : center;
  margin-top: 25px;
  gap:20px;
`

const Box = styled.div`
  background-color: transparent;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  height: 350px;
  padding: 20px;
`;

const MiniBox = styled.div`
  background-color: transparent;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  height: 350px;
  padding:15px 20px;
`;

const Header = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 25px;
  margin-left: 20px;
`;

const dayNames = [
 '일요일',
 '월요일',
 '화요일',
 '수요일',
 '목요일',
 '금요일',
 '토요일'
];

function MainPage(){
  const[today, setToday] = useState(new Date(Date.now()));
  
  return (
  <MainBox>
    <Header>{`${10}월 ${28}일 금요일 오늘의 주식 입니다.`}</Header>
    <FirstContainer>
      <Box>
        <ChartWrapper/>
      </Box>
      <Box>  
        <SoaringStock/>
      </Box>
    </FirstContainer>
    <SecondContainer>
      <MiniBox><InterestStock/></MiniBox>
      <MiniBox><UpDownRanking/></MiniBox>
      <MiniBox><TradingRanking/></MiniBox>
    </SecondContainer>
  </MainBox>
  );
}

/*<Container>
<ChartWrapper/>
<SoaringStock/>
</Container>
<Container>
<InterestStock/>
<UpDownRanking/>
<TradingRanking/>
</Container>
*/

export default MainPage;