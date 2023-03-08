import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { getCustomeDate, groupByDateValue } from './HelperChart';

export default function MyChart({ user }) {
  const [way,setSortedBY]=useState('day')
  const chartRef = useRef()
  let LABELS = []
  const getLabels = () => {
    if (way === 'day')
      return user.rounds.map(r => getCustomeDate(r.date))

    const data = Object.entries(groupByDateValue(user.rounds, way)).reduce((p, c) => {
      return p.concat(c[1])
    }, [])

    let res = []
    if (way === 'month') {
      // let res= data.map(r =>getCustomeDate(r.date,way))
      debugger
      res = data.map(r => new Date(r.date).getMonth() + 1)
    }

    if (way === 'year')
      res = data.map(r => new Date(r.date).getFullYear())

    LABELS = [...new Set(res)]
    return LABELS
  }

  const getSpeed = () => {
    if (way === 'day')
      return user.rounds.map(r => r.speed)

    const roundsPerWay = groupByDateValue(user.rounds, way)
    debugger
    const res = Object.values(roundsPerWay).map(rounds => {
      const sum = rounds.reduce((p, c) => p + c.speed, 0)
      return Math.round(sum / user.rounds.length)
    })

    return res
  }
  let chart = null
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chart) {
      chart.destroy();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: getLabels(),
        datasets: [
          {
            label: 'WPM',
            data: getSpeed(),
            borderWidth: 1
          },
          // {
          //   label: 'Errors',
          //   data: Object.values(groupByDateValue(user.rounds,'day')).map(r => r.errors),
          //   borderWidth: 1
          // },
          // {
          //   label: 'Accuracy',
          //   data: user.rounds.map(r => r.acc),
          //   borderWidth: 1
          // }
        ]
      },
      options: {
        interaction: {
          intersect: true,
          mode: 'index',
        },
        scales: {
          y: {
            beginAtZero: true,
          }
        },
        maintainAspectRatio: false
      }
    });
  },[])

  useEffect(()=>{
    //complete here the chart when chaneg...
  },[way])
  return (
    <>
      <h1>Statistics</h1>
      <button onClick={() => setSortedBY('day')}>Today</button>
      <button onClick={() => setSortedBY('month')}>Months</button>
      <button onClick={() => setSortedBY('year')}>Years</button>
      <div className="myChart">
        <canvas ref={chartRef} width={700} height={400}></canvas>
      </div>
    </>

  )
}
