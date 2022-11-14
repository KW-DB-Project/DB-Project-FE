import { Chart as ChartJS } from 'chart.js/auto'
import { Line }            from 'react-chartjs-2'
import styled from 'styled-components';

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
  const datas = [];

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

