import { diffDateString } from '@/utils/diffDateString'
import CardOneProperty from './CardOneProperty'
import CardThreeProperties from './CardThreeProperties'

function Body ({ dataCollar }) {
  const lastUpdate = dataCollar.__received_at
  const currentDate = new Date()

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-2 items-end'>
        <h6 className='font-semibold text-lg'>Sensores</h6>

        <div className='flex flex-col text-sm text-right'>
          <span>Ultima actualizacion</span>
          <span className='-mt-1 font-bold'>{diffDateString(currentDate, lastUpdate)}</span>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Object.entries(dataCollar).map(([key, value]) => {
          if (key.includes('__')) return null

          if (typeof value !== 'object') {
            return <CardOneProperty key={key} name={key} value={value} />
          } else {
            return <CardThreeProperties key={key} name={key} value={value} receivedAt={dataCollar.received_at} />
          }
        })}
      </div>
    </div>
  )
}

export default Body
