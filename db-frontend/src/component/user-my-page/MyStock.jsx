import { useEffect, useState } from "react";
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../../atom/loginAtom';
import axios from "axios";

function MyStock () {

    const [s_rate,setSrate] = useState(0);
    const [s_amount,setSamount] = useState(0);
    
    const [stocks,setStocks] = useState([]);
    const login = useRecoilValue(isLoginedAtom);

    useEffect(() => {

        //보유주식
        axios
        .post('/user/myStock', {
        id:login.id
        })
        .then((res) => {
        setSrate(res.data.rateOfReturn);
        setSamount(res.data.appraisalAmount);
        setStocks(res.data.myStockDto);
        })
        .catch((err) => {
        console.log(err);
        });

    },[]);


    const printStock = () => {
        const result = [];
    for(var i =0 ; i <stocks.length ; i++){
        
        //현재가
        let prePrice= Math.ceil(stocks[i].gainLoss / stocks[i].stkNum ) + stocks[i].averagePrice ; 

        result.push(
        <GrayMargin>
        <GrayLayout>
            <LittleTitle>{stocks[i].stkNm}</LittleTitle>
            <LittleTitle style={{marginLeft:'30px'}}>{stocks[i].stkNum}</LittleTitle>
        <RightLayout >
        <div style={{display:'flex'}}>
            <LittleTitle>{stocks[i].averagePrice}원</LittleTitle>
            <LittleTitle style={{marginLeft:'25px'}}>{prePrice}원</LittleTitle>
            <LittleTitle style={{marginLeft:'25px'}}>{stocks[i].gainLoss}원</LittleTitle>
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
            <MiddleTitle>총 수익률</MiddleTitle><RightLayout><Title>{s_rate < 0 ? <DownSchg>▼&nbsp;{-s_rate}%</DownSchg> : <UpSchg>▲&nbsp;{s_rate}%</UpSchg>}</Title></RightLayout>
        </Box>
        <Box>
            <MiddleTitle>총 평가 금액</MiddleTitle><RightLayout><Title>{s_amount}원</Title></RightLayout>
        </Box>
    </StyledLayout>
</div>
    );
}

export default MyStock;

//상승
const UpSchg = styled.div`
color:rgb(252,190,190);
`;

//하락
const DownSchg = styled.div`
color:rgb(190,222,252);
`;

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