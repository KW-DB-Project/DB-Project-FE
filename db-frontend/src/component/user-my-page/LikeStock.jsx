import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";


function LikeStock (props) {

    const datas = [];
    datas= props.like; 
    
    const printStock = () => {

        const result = [];

        for(var i =0 ; i <datas.length ; i++){
        result.push(
        
        <GrayMargin>
        <GrayLayout>
            <LittleTitle>{datas[i].stkNm}</LittleTitle><RightLayout><LittleTitle>{datas[i].slast}원</LittleTitle></RightLayout>
        </GrayLayout>
        </GrayMargin>
        )
        }
    
        return result;
    }

    return(
<div className="likeStockPage">
<StyledLayout>
    <Box>
        <Title>관심종목</Title><RightLayout></RightLayout>
    </Box>
    <CateBox>
            <LittleTitle style={{marginLeft:'5px'}}>종목명</LittleTitle>
            <RightLayout>
                <LittleTitle style={{marginRight:'5px'}}>현재가</LittleTitle>
            </RightLayout>
    </CateBox>
    <ScrBox>
    {printStock()}
    </ScrBox>
    <div style={{marginBottom:'20px'}}/>
</StyledLayout>
</div>
    );
}

export default LikeStock;

//스타일 레이아웃
const StyledLayout = styled.div`
border-radius: 50px 50px 50px 50px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;
`;

//레이아웃
const Box =styled.div`
display:flex;
padding:10px;
margin:10px;
`;

//회색 박스 간격
const GrayMargin = styled.div`
display:flex;
margin-left:10px;
margin-right:10px;
margin-bottom:10px;
`;

//카테고리 박스
const CateBox = styled.div`
display:flex;
margin-left:20px;
margin-right:20px;
`;

//오른 정렬 레이아웃
const RightLayout = styled.div`
  width:40%;
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

//스크롤 페이지
const ScrBox = styled.div`
overflow:auto;
height:200px;
`;