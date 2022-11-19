import { useState } from "react";
import styled from "styled-components";

function StockTrade (){

const [amount,setAmount]=useState('1');
const [selectedType,setSelectedType]=useState('매수');

  const onChange = (e) => {
    setAmount(e.target.value);
  };

    const BuyClick = () => {
       
      //  console.log(type);
        setSelectedType('매수');
        console.log(selectedType);
       // navigate('/stocktrading/buy');
    }
  
    const SellClick = () => {
     
    //  console.log(type);
      setSelectedType('매도');
      console.log(selectedType);
    //  navigate('/stocktrading/sell');
  }

  const Trade = () => {

    if(selectedType === '매수'){
        alert('매수: '+amount+'주');
    }
    else if(selectedType === '매도'){
        alert('매도: '+amount+'주');
    }
    else{
        alert('매수, 매도 알수없음');
    }

  }



  return(
   <StockTradeCom className="StockTradeComponent">
    <StyledLayout>
        <Box>  
        <StyledBtn style={{backgroundColor:'rgb(252,190,190)'}} onClick={BuyClick} >매수</StyledBtn>
        <StyledBtn style={{backgroundColor:'rgb(190,222,252)',marginLeft:'40px'}} onClick={SellClick}>매도</StyledBtn>
        </Box>
        <Box>
        <TitleLayout><Title>주문수량</Title></TitleLayout>
        <InputLayout>
          <StyledInput type="text" onChange={onChange} name="amount" value={amount}></StyledInput><Title style={{marginRight:'15px'}}>주</Title>
        </InputLayout>
        </Box>
        <Box>
        <TitleLayout><Title>주문가격</Title></TitleLayout>
        <InputLayout>
          <StyledInput type="number" onChange={onChange} name="amount" value={amount*1000} disabled></StyledInput><Title style={{marginRight:'15px'}}>원</Title>
        </InputLayout>
        </Box>
        <Box>
        <StyledBtn className={selectedType === '매수' ? 'buy' : 'sell'} onClick={Trade} >주문</StyledBtn>
        </Box>
      </StyledLayout>
      </StockTradeCom>
  );

    }

export default StockTrade;

//글자 속상
const Title=styled.div`
font-size:15px;
font-weight:bold;
margin-top:15px;
`;

//글자 레이아웃
const TitleLayout = styled.div`
height:60px;
width:60px;
text-align:right;
`;

//인풋 레이아웃
const InputLayout =styled.div`
width:75%;
height:50px;
border-radius: 30px;
background-color:rgb(217,217,217);
display:flex;
margin:0 auto;
padding:6px;
`;

//입력 레이아웃
const StyledInput =styled.input`
outline:none;
border: 0 solid black;
width:30%;
font-size:15px;
background-color:rgb(217,217,217);
margin-left: auto;
text-align:right;
margin-top:5px;
`;

const StockTradeCom =styled.div`

`;

//스타일 레이아웃
const StyledLayout = styled.div`
margin-top:30px;
border-radius: 50px 50px 50px 50px;
width:500px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;
`;

//기업명 기업정보 아이콘 묶는 레이아웃
const Box =styled.div`
padding:10px;
margin:10px;
display:flex;
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
margin:0 auto;
${(props)=>{
    if(props.className === 'buy' ){
        return `
        background-color:rgb(252,190,190);
        `;
    }
    else{
        return `
        background-color:rgb(190,222,252);
        `;
    }
}};
`;

