import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2'
import { useState, useEffect, React } from "react";
import axios from 'axios';

import {useRecoilValue} from "recoil";
import { isLoginedAtom } from '../../atom/loginAtom'
import { useNavigate } from "react-router-dom";

function ComExplain({name,stockPriceDto,lastPriceDto}){
    const login = useRecoilValue(isLoginedAtom);    
   
    const datas = [];
    const navigate=useNavigate();


    const {stkCd,slow,svol,schg,shigh,slast,sopen}=stockPriceDto;
    const [clicked,setClicked]= useState(false);

    //그래프 값 할당 및 props 값 할당 받기
      for(let i=0; i<lastPriceDto.length; i++){

        datas.push({
          x : lastPriceDto[i].day.substr(0,10),
          y : lastPriceDto[i].slast,
        })
     
      }

    const options = {
      fill: {
        target : {value: slast},
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
    const sData = {
      labels: [],
      datasets:[
        {
          label: 'KOSPI',
          data : datas,
        }
      ]
    };
    

    //처음에 관심인지 아닌지 설정할 때
      if(login.isLogined){

      axios.post('/trade/heart',
      {
        id:login.id,
        cd:stkCd
      })
      .then((res)=>{
          setClicked(res.data.isSuccess);
      })
      .catch((err)=>{
          console.log(err);
      });
    }


  //관심 클릭 이벤트
  const onClick = () => {

    if(login.isLogined){

    axios
    .post('/trade/interest', {
      id:login.id, //아이디
      cd:stkCd, // 주식코드
      heart:clicked // 타입
    })
    .then((res) => {
      console.log(res.data);
      alert(res.data.isSuccess);
    })
    .catch((err) => {
      console.log(err);
    });


      if(clicked){
      setClicked(false);
      }
      else if(clicked === false){
       setClicked(true);    
      }
      else{
      console.log('clicked value 변경불가');
      }
    }
    else{
      navigate('/login');
    }
        
        return;
  }

    return(
        <div className="ComExplainComponent">
        <StyledLayout>
            <Box>
            <StyledFontawsome className={clicked ? 'clicked' : 'unclicked'} onClick={onClick} icon={faHeart} />
            <Title style={{fontWeight:'bold'}}>{name}</Title>
            </Box>
            <Box>
                <Title>{slast}원</Title><RightLayout>{schg < 0 ? <DownSchg>▼&nbsp;{-schg}%</DownSchg> : <UpSchg>▲&nbsp;{schg}%</UpSchg>}</RightLayout>
            </Box>
            <Box>
                <Line type="line" data={sData} options={options} ></Line>
            </Box>
            <Box>
                <Title style={{fontWeight:'bold'}}>투자정보</Title>
            </Box>
            <Box>
                <Title>상한가</Title><RightLayout style={{color:'rgb(252,190,190)'}}>{shigh} 원</RightLayout>
            </Box>
            <Box>
                <Title>하한가</Title><RightLayout style={{color:'rgb(190,222,252)'}}>{slow} 원</RightLayout>
            </Box>
            <Box>
                <Title>거래량</Title><RightLayout>{svol}</RightLayout>
            </Box>
      </StyledLayout>
      </div>
    );
}

export default ComExplain;

//상승
const UpSchg = styled.div`
color:rgb(252,190,190);
`;

//하락
const DownSchg = styled.div`
color:rgb(190,222,252);
`;

//스타일 레이아웃
const StyledLayout = styled.div`
margin-top:30px;
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