import Chart from 'chart.js/auto';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../App';
import { getCustomeDate, groupByDateValue } from './HelperChart';

export default function MyChart({way}) {
  debugger
  const app = useContext(AppContext)
  const user = app.user
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

  const getErrors=()=>{
    if (way === 'day')
      return user.rounds.map(r => r.errors)

      const roundsPerWay = groupByDateValue(user.rounds, way)
      const res = Object.values(roundsPerWay).map(rounds => {
        const sum = rounds.reduce((p, c) => p + c.errors, 0)
        // return Math.round(sum / user.rounds.length)
        return sum
      })
      return res
  }

  const getAccuracy=()=>{
    if (way === 'day')
      return user.rounds.map(r => r.acc)

      const roundsPerWay = groupByDateValue(user.rounds, way)

      const res = Object.values(roundsPerWay).map(rounds => {
        const sum = rounds.reduce((p, c) => p + c.acc, 0)
        return Math.round(sum / user.rounds.length)
        return sum
      })
      return res
  }

  const refreshChart=()=>{
    let chart = null
    const ctx = chartRef.current.getContext('2d');
    chart = new Chart(ctx, {
      type: way==='year'?'bar':'line',
      data: {
        labels: getLabels(),
        datasets: [
          {
            label: 'WPM',
            data: getSpeed(),
            borderWidth: 1
          },
          {
            label: 'Errors',
            data: getErrors(),
            borderWidth: 1
          },
          {
            label: 'Accuracy',
            data: getAccuracy(),
            borderWidth: 1
          }
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
    return [ctx,chart]
  }
  useEffect(() => {
    const [ctx,chart]=refreshChart()
    return ()=>{
      chart.destroy();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  })

  return (
    <>
      <div className="myChart">
        <canvas ref={chartRef} width={700} height={400}></canvas>
      </div>
    </>

  )
}
