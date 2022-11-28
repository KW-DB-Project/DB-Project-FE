import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect, useState } from 'react';
import { Line }            from 'react-chartjs-2'
import styled from 'styled-components';
import Axios from "axios";

const tenMinutes = 600000;
const date = new Date('2010/07/24/00:00');
const timestamp = date.getTime();

const CustomLine = styled(Line)`
  position: relative;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 300px;
`;

function KOSPIChart(){
  const [kospi, setKospi] = useState([]);
  const datas = [];

  useEffect(()=>{
    Axios.get("/main/kospi")
      .then((res)=>{
        setKospi(res.data);
      }).catch((e)=>{
        console.error(e);
      })
  }, []);

  for(let i=0; i<kospi.length; i++){
    datas.push({
      x : kospi[i].sdate.split('T')[0],
      y : kospi[i].slast,
    })
  }

  const options = {
    fill: {
      target : {value: datas[29]?.y},
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
        maxWidth : "200px",
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

  return(
    <Container>
      <CustomLine
      data={data}
      options={options}
      />
    </Container>
  );
}

export default KOSPIChart;

