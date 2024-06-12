import Card from './components/Card'
import COWS from '@/mocks/cows.json'

function Cows () {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Cows</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {COWS.map((cow) => (
          <Card key={cow.id} cow={cow} />
        ))}
      </div>
    </div>
  )
}

export default Cows
