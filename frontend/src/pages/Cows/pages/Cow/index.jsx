import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import COWS from '@/mocks/cows.json'
import { lastByAid } from '@/services/collares.service'
import { mapCollarData } from '@/utils/mapCollarData'
import Body from './components/Body'

function Cow () {
  const { id } = useParams()

  // eslint-disable-next-line eqeqeq
  const cow = COWS.find((cow) => cow.id == id)

  if (!cow) {
    return <p>Cow not found</p>
  }

  const [dataCollar, setDataCollar] = useState(null)

  useEffect(() => {
    getCollarData()

    const socket = io(import.meta.env.VITE_URL_API_SOCKET)

    socket.on(`collar${id}DataUpdated`, (data) => {
      const mapData = mapCollarData(data)
      setDataCollar(mapData)
    })

    return () => {
      socket.off(`collar${id}DataUpdated`)
    }
  }, [])

  const getCollarData = async () => {
    try {
      const response = await lastByAid(cow.id)
      const mapData = mapCollarData(response.data)
      setDataCollar(mapData)
    } catch (error) {
      console.log('Error fetching collar data: ', error)
    }
  }

  return (
    <>
      <div className='bg-slate-800 shadow-sm rounded-lg h-48 text-white p-4'>
        <div className='flex gap-4'>
          <img
            src={cow.img}
            alt='cow'
            className='inline-block object-cover object-center rounded-lg w-24 h-24'
          />

          <div>
            <h2 className='text-4xl font-semibold mb-2'>
              {cow.name}
            </h2>
            <p className='text-slate-300 -mt-1 text-sm max-w-[75ch]'>
              {cow.description}
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white shadow-sm rounded-lg p-4 mx-3 -mt-16 border border-slate-600/20'>
        {dataCollar
          ? <Body dataCollar={dataCollar} />
          : <p>Loading...</p>}
      </div>
    </>
  )
}

export default Cow
