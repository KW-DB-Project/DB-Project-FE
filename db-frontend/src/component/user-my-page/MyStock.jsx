import axios from "axios";
import styled from "styled-components";

function MyStock ({rate,amount,stocks}) {

    var s_rate = 0;
    var s_amount = 0;
    const datas = [];

    datas =stocks;
    s_rate=rate;
    s_amount=amount;


    const printStock = () => {
        const result = [];
    for(var i =0 ; i <datas.length ; i++){
        result.push(
        <GrayMargin>
        <GrayLayout>
            <LittleTitle>{datas[i].stockStkCd}</LittleTitle>
            <LittleTitle style={{marginLeft:'30px'}}>{datas[i].stkNum}</LittleTitle>
        <RightLayout >
        <div style={{display:'flex'}}>
            <LittleTitle>{datas[i].stkNum}원</LittleTitle>
            <LittleTitle style={{marginLeft:'25px'}}>{datas[i].averagePrice}원</LittleTitle>
            <LittleTitle style={{marginLeft:'25px'}}>{datas[i].gainLoss}원</LittleTitle>
            </div>
        </RightLayout>
        </GrayLayout>
        </GrayMargin>
        )
    }

    return result;
    }
    
    return(
<div className="myStockPage">
    <StyledLayout>
        <Box>
            <Title> 보유주식</Title>
        </Box>
        <CateBox>
            <LittleTitle>종목명</LittleTitle>
            <LittleTitle style={{marginLeft:'30px'}}>보유수량</LittleTitle>
            <RightLayout>
                <div style={{display:'flex'}}>
                <LittleTitle>매입가</LittleTitle>
                <LittleTitle style={{marginLeft:'25px'}}>현재가</LittleTitle>
                <LittleTitle style={{marginLeft:'25px'}}>평가손익</LittleTitle>
                </div>
            </RightLayout>
        </CateBox>
        <ScrBox>
        {printStock()}
        </ScrBox>
        <Box>
            <MiddleTitle>총 수익률</MiddleTitle><RightLayout><Title>{s_rate}%</Title></RightLayout>
        </Box>
        <Box>
            <MiddleTitle>총 평가 금액</MiddleTitle><RightLayout><Title>{s_amount}</Title></RightLayout>
        </Box>
    </StyledLayout>
</div>
    );
}

export default MyStock;

//회색 박스 간격
const GrayMargin = styled.div`
display:flex;
margin-left:10px;
margin-right:10px;
margin-bottom:10px;
`;

//스타일 레이아웃
const StyledLayout = styled.div`
border-radius: 50px 50px 50px 50px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;
margin-top:30px;
`;

//기업명 기업정보 아이콘 묶는 레이아웃
const Box =styled.div`
display:flex;
padding:10px;
margin:10px;
`;

const CateBox = styled.div`
display:flex;
margin-left:20px;
margin-right:20px;
`;

//스크롤 페이지
const ScrBox = styled.div`
overflow:auto;
height:200px;
`;

//오른 정렬 레이아웃
const RightLayout = styled.div`
  width:50%;
  height:40px;
  text-align:right;
   margin-left:auto;
`;

//제목
const Title = styled.div`
  font-size:25px;
  margin-top:3px;
  margin-left:5px;
  font-weight:bold;
`;

const MiddleTitle = styled.div`
font-size:20px;
margin-top:3px;
margin-left:5px;
`;

//소제목
const LittleTitle = styled.div`
font-size:15px;
margin-top:3px;
margin-left:5px;
`;

//회색 레이아웃
const GrayLayout =styled.div`
width:100%;
height:50px;
border-radius: 15px;
background-color:rgb(217,217,217);
padding:15px;
display:flex;
`;