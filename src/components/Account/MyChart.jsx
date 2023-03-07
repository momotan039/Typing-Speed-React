import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export default function MyChart({user}) {
    const chartRef=useRef()
    debugger
    let chart=null
    useEffect(()=>{
        const ctx = chartRef.current.getContext('2d');
        if (chart) {
            chart.destroy();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          }
        chart=new Chart(ctx, {
          type: 'bar',
          data: {
            labels: user.rounds.map(r=>r.date),
            datasets: [{
              label: '# of Votes',
              data:user.rounds.map(r=>r.speed),
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
    },[])
  return (
    <div className="myChart">
         <canvas ref={chartRef} width={700} height={400}></canvas>
    </div>
  )
}
