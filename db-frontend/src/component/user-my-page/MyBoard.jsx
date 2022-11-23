import styled from "styled-components";

function MyBoard () {
    
    const printStock = () => {

        const result = [];

        for(var i =0 ; i <10 ; i++){
        result.push(
            <GrayMargin>
            <GrayLayout>
                <LittleTitle>글제목</LittleTitle><RightLayout><LittleTitle>날짜</LittleTitle></RightLayout>
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
        <Title>내가 쓴 글</Title><RightLayout></RightLayout>
    </Box>
    <ScrBox>
    {printStock()}
    </ScrBox>
    <div style={{marginBottom:'20px'}}/>
</StyledLayout>
</div>
    );
}

export default MyBoard;

//스타일 레이아웃
const StyledLayout = styled.div`
margin-top:30px;
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
height:180px;
`;