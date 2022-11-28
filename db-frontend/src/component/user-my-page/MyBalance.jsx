import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BalTab from "./tab/BalTab";
import ChargeTab from "./tab/ChargeTab";


function MyBalance () {

    const [selTab,setSelTab] = useState(0);
    const [tabName,setTabName] =useState('잔액');
    
    const obj = {
        0: <BalTab />,
        1: <ChargeTab />
    }

    const ChargeBtn = () => {
        if(selTab === 0){
            setSelTab(1);
            setTabName('충전');
        }
        else{
            setSelTab(0);
            setTabName('잔액');
        }
        return;
    }



    return(
<div className="balancepage">
<StyledLayout>
    <Box>
        <Title>예수금</Title><RightLayout><StyledBtn className={selTab ? 'balance' : 'charge'} onClick={ChargeBtn}>{tabName}</StyledBtn></RightLayout>
    </Box>
    <Box>
        <GrayLayout>
            {obj[selTab]}
        </GrayLayout>
    </Box>
</StyledLayout>
</div>
    );
}

export default MyBalance;

//스타일 레이아웃
const StyledLayout = styled.div`
border-radius: 50px 50px 50px 50px;
box-shadow: ${(props) => props.theme.defaultShadow};
padding:10px;

`;

//기업명 기업정보 아이콘 묶는 레이아웃
const Box =styled.div`
display:flex;
padding:10px;
margin:10px;
`;

//오른 정렬 레이아웃
const RightLayout = styled.div`
  width:200px;
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

//충전/잔액 탭 버튼
const StyledBtn = styled.button`
  font-size:15px;
  text-align:center;
  border-radius:30px;
  width:30%;
  border:none;
  padding:7px;
  ${(props)=> {
    if(props.className === 'charge'){
        return `background-color: rgb(217,217,217);
        `;
    }
    else if(props.className === 'balance'){
        return `background-color: black;
        color:white;
        `;
    }
  }};
`;

//회색 레이아웃
const GrayLayout =styled.div`
width:100%;
height:50px;
border-radius: 15px;
background-color:rgb(217,217,217);
padding:15px;
`;