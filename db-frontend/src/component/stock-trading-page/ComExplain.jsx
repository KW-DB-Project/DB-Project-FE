import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2'
import { useState } from "react";

const tenMinutes = 600000;
const date = new Date('2010/07/24/00:00');
const timestamp = date.getTime();

function ComExplain(){

    const datas = [];
    const [price,setPrice] = useState(0);
    const [clicked,setClicked]= useState('false');

  for(let i=0; i<=36; i++){
    const v = new Date(timestamp + tenMinutes * i);

    datas.push({
      x : `${v.getHours() >= 10 ? v.getHours() : '0'+v.getHours()}:${v.getMinutes() >= 10 ? v.getMinutes() : '0'+v.getMinutes()}`,
      y : Math.floor(Math.random() * 100),
    })
  }

  const options = {
    fill: {
      target : {value: 60},
      above : "#ff7675",
      below: "#74b9ff",
    },
    elements :{
      point :{
        radius: 1,
      }
    },
    plugins:{
      legend :{
        maxWidth : "100px",
      },
    },
    legend: {
      display: false, // label 보이기 여부

    },
    scales: {
      
    },
   
    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
    responsive : true,
  }
  const data = {
    labels: [],
    datasets:[
      {
        label: 'KOSPI',
        data : datas,
      }
    ]
  };

  const onClick = () => {
        if(clicked){
            setClicked(false);
            console.log(clicked);
        }
        else if(clicked === false){
            setClicked(true);
            console.log(clicked);
        }
        else{
            console.log('clicked value 변경불가');
        }
        
        return;
  }

    return(
        <div className="ComExplainComponent">
        <StyledLayout>
            <Box>
            <StyledFontawsome className={clicked ? 'clicked' : 'unclicked'} onClick={onClick} icon={faHeart} />
            <Title style={{fontWeight:'bold'}}>기업명</Title>
            <RightLayout><ComEx>ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ</ComEx></RightLayout>
            </Box>
            <Box>
                <Title>{price}원</Title><RightLayout>5.0%</RightLayout>
            </Box>
            <Box>
                <Line type="line" data={data} options={options} ></Line>
            </Box>
            <Box>
                <Title style={{fontWeight:'bold'}}>투자정보</Title>
            </Box>
            <Box>
                <Title>상한가</Title><RightLayout style={{color:'rgb(252,190,190)'}}>상한가 원</RightLayout>
            </Box>
            <Box>
                <Title>하한가</Title><RightLayout style={{color:'rgb(190,222,252)'}}>하한가 원</RightLayout>
            </Box>
            <Box>
                <Title>거래량</Title><RightLayout>거래량</RightLayout>
            </Box>
      </StyledLayout>
      </div>
    );
}

export default ComExplain;

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
display:flex;
padding:10px;
margin:10px;
`;

//기업 정보
const ComEx = styled.div`
font-size:15px;
margin-top:5px;
`;

//오른 정렬 레이아웃
const RightLayout = styled.div`
  width:200px;
  height:40px;
  text-align:right;
  overflow:auto;
   margin-left:auto;
`;

//기업 이름
const Title = styled.div`
  font-size:25px;
  margin-top:3px;
  margin-left:5px;
`;

//아이콘 스타일
const StyledFontawsome = styled(FontAwesomeIcon)`
width:30px;
height:30px;
${(props)=>{
    if(props.className === 'clicked' ){
        return `
        color:rgb(255,84,84);
        `;
    }
    else{
        return `
        color:rgb(217,217,217);
        `;
    }
}};
`;
