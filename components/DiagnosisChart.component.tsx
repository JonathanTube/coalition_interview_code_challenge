"use client"
import React, { memo, useLayoutEffect, useRef, useState } from "react"
import "chart.js/auto"
import { Line } from "react-chartjs-2"
import { diagnosisHistoryItem } from "types/Patient.d"
import {
  ActiveElement,
  ChartData,
  ChartEvent,
  ChartOptions
} from "chart.js/auto"

type Props = {
  histories: diagnosisHistoryItem[]
  callback: (index: number) => void
}

const DiagnosisChart: React.FC<Props> = ({ histories, callback }) => {
  const [lineChartData, setLineChartData] = useState<ChartData<"line">>()
  const chartRef = useRef(null)

  useLayoutEffect(() => {
    const template: ChartData<"line"> = {
      labels: [],
      datasets: [
        {
          label: "Systolic",
          data: [],
          borderColor: "#E66FD2",
          pointBackgroundColor: "#E66FD2",
          pointBorderWidth: 1,
          pointBorderColor: "#F4F0FE",
          borderWidth: 2
        },
        {
          label: "Diastolic",
          data: [],
          borderColor: "#8C6FE6",
          pointBackgroundColor: "#8C6FE6",
          pointBorderWidth: 1,
          pointBorderColor: "#F4F0FE",
          borderWidth: 2
        }
      ]
    }
    histories?.forEach(({ month, year, blood_pressure }) => {
      const label = `${month.substring(0, 3)},${year}`
      template?.labels?.push(label)
      const { systolic, diastolic } = blood_pressure
      template.datasets[0].data.push(systolic.value)
      template.datasets[1].data.push(diastolic.value)
    })
    setLineChartData(template)
  }, [histories])

  const lineChartOptions: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false
    },
    elements: {
      line: {
        tension: 0.5
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.5,
        to: 0.3,
        loop: true
      }
    },
    scales: {
      y: {
        min: 60,
        max: 180
      }
    },
    events: ["mousemove"],
    plugins: {
      legend: {
        display: false
      }
    },
    onHover: (_: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length === 0) return
      const idx = elements[0].index
      callback(idx)
    }
  }

  return (
    <>
      {lineChartData && (
        <Line ref={chartRef} data={lineChartData} options={lineChartOptions} />
      )}
    </>
  )
}

export default memo(DiagnosisChart)
