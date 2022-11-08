import { useState } from "react";
import styled from "styled-components"
import ChartWrapper from "../component/ChartWrapper";
import InterestStock from "../component/InterestStock";
import SoaringStock from "../component/SoaringStock";
import TradingRanking from "../component/TradingRanking";
import UpDownRanking from "../component/UpDownRanking";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  width:60%;
  margin: 20px auto;
  padding-top: 160px;
`;

const FirstContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns : repeat(2, 1fr); 
  justify-content : space-between;
  gap: 50px;
  margin-top: 25px;
`;

const SecondContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns : repeat(3, 1fr); 
  justify-content : space-between;
  margin-top: 25px;
  gap:20px;
`

const Box = styled.div`
  background-color: transparent;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  height: 350px;
  padding: 20px;
`;

const MiniBox = styled.div`
  background-color: transparent;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.defaultShadow};
  height: 350px;
  padding:15px 20px;
`;

const Header = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 25px;
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
    <Header>{`${today.getMonth() + 1}월 ${today.getDate()}일 ${dayNames[today.getDay()]} 오늘의 주식 입니다.`}</Header>
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