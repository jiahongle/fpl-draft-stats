import { useState } from "react"
import CsvParser from "../utils/CsvParser"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import "./LineChart.css"

const LineChart = (props) => {
    const [data, setData] = useState(null)

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: props.chartLabel,
        },
      },
      scales: {
        x: {
          beginsAtZero: false,
          title: {
            display: true,
            text: props.xLabel
          }
        },
        y: {
          beginsAtZero: true,
          reverse: props.reverse ? props.reverse : false,
          title: {
            display: true,
            text: props.yLabel
          }
        }
      }
    }

    CsvParser(props.filePath, setData)

    const labels = data?.meta.fields.filter(label => label !== "Gameweek")
    const datasets = data?.data.map(row => {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return {
        label: row['Gameweek'],
        data: Array.from({length: data?.meta.fields.length-1}, (_, i) => i + 1).map((i) => row[i]),
        borderColor: props.rgbArray,
        backgroundColor: props.rgbArray
      }
    })
    console.log(datasets)

    const chartData = {
      labels,
      datasets
    }

    return <div className="lineChart">{data && <Line options={options} data={chartData} />}</div>
      
}

export default LineChart