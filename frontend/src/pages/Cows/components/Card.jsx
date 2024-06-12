import { Link } from 'react-router-dom'
import { PATHS } from '@/routes/paths'

function Card ({ cow }) {
  return (
    <Link to={`${PATHS.COWS}/${cow.id}`}>
      <div className='bg-white shadow-sm rounded-lg p-3 border border-slate-800/20'>
        <div className='flex items-center gap-6'>
          <img
            src={cow.img}
            alt='cow'
            className='inline-block object-cover object-center rounded-lg w-16 h-16'
          />
          <div>
            <h5 className='text-xl font-semibold leading-snug'>{cow.name}</h5>
            <p className='text-slate-600 text-sm'>Id: {cow.id}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
