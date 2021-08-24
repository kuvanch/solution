import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css'

const genData = (data:string[],label:string[],bg:string[]) => ({
  labels: label,
  datasets: [
    {
      data: data,
      backgroundColor: bg,
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = ({chartData}:any) => {
  const dataChart:string[] = []
  const bgChart:string[] = []
  const labelChart:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Avg','Sep','Oct','Nov','Dec']
  labelChart.map((item,i) => {
    if(Object.keys(chartData).includes(item)){
      dataChart.push(chartData[item])
      if(chartData[item] > 0 || chartData[item] === ''){
        bgChart.push('#28a745')
      }
      else {
        bgChart.push('red')
      }
    }else {
      dataChart.push('0')
      bgChart.push('#28a745')
    }
  })
  
  return (
    <>
      <div className="chart">
        <Bar data={() => genData(dataChart,labelChart,bgChart)} options={options} />
      </div>
    </>
  );
};

export default Chart;