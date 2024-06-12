import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { io } from 'socket.io-client'
import { currentDateToSelected } from '@/services/collares.service'
import { mapCollarData } from '@/utils/mapCollarData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const chartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  slices: 5
}

function LinesChart ({ id, property }) {
  const [dataPoints, setDataPoints] = useState([])

  useEffect(() => {
    getCurrentDateToSelected()

    /* const socket = io(import.meta.env.VITE_URL_API_SOCKET)

    socket.on(`collar${id}DataUpdated`, (data) => {
      data = mapCollarData(data)
      console.log('data', data.__received_at)
      setDataPoints(prevDataPoints => [...prevDataPoints, data])
    })

    return () => {
      socket.off(`collar${id}DataUpdated`)
    } */
  }, [id])

  const getCurrentDateToSelected = async () => {
    try {
      const response = await currentDateToSelected('2023-02-20')
      const mapData = response.data.map(data => mapCollarData(data))
      setDataPoints(mapData)
    } catch (error) {
      console.log('Error fetching collar data: ', error)
    }
  }

  const chartData = {
    labels: dataPoints.map(point => point.__received_at.toLocaleDateString('es-ES')),
    datasets: [
      {
        label: property,
        data: dataPoints.map(point => point[property]),
        tension: 0.3,
        fill: false,
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  }

  return <Line data={chartData} options={chartOptions} />
}

export default LinesChart
