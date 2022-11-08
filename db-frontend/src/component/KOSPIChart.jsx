import {Line} from 'react-chartjs-2';

const tenMinutes = 600000;
const date = new Date('2010/07/24/00:00');
const timestamp = date.getTime();

function KOSPIChart(){
  const datas = [];

  for(let i=0; i<=36; i++){
    const v = new Date(timestamp + tenMinutes * i);

    datas.push({
      x : `${v.getHours() >= 10 ? v.getHours() : '0'+v.getHours()}:${v.getMinutes() >= 10 ? v.getMinutes() : '0'+v.getMinutes()}`,
      y : (i+1) % 16,
    })
  }

  const data = {
    datasets: [
      {
        fill: {above: "rgba(255,118,117,0.6)", below:"rgba(116,185,255,0.6)", target:{value: 8}},
        type: 'line',
        label: 'KOSPI',
        borderWidth: 1,
        data: datas,
        pointRadius : 0,
        borderColor: 'transparent',
      }]
  };

  return(
    <div>

    </div>
  );
}

export default KOSPIChart;

